export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { messages } = req.body || {};

  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: "Missing messages array" });
  }

  if (!process.env.OPENAI_API_KEY) {
    // This is the most common issue: env var not set in Vercel
    return res.status(500).json({
      error: "OPENAI_API_KEY is not set on the server",
    });
  }

  // Simple test service packages description
  const servicePackagesDescription = `
You MUST always recommend exactly ONE of these PingCheck service packages at the end of your response:

1. "Home Wi-Fi & Security Tune-Up"
   - Type: Home user
   - Best for: Slow Wi-Fi, dropouts, basic home security concerns, router/modem issues.

2. "Small Business Network Care"
   - Type: Business user (small office / clinic / retail under ~50 staff)
   - Best for: One office having Wi-Fi issues, staff complaining internet is slow, printers dropping, VoIP quality issues.

3. "Multi-Site & Remote Worker Pack"
   - Type: Business user (multiple locations or remote workers)
   - Best for: VPN problems, remote users unable to connect, SD-WAN, multiple branches.

4. "Cybersecurity & Protection Check"
   - Type: Home or Business
   - Best for: Hacking/phishing concerns, malware, strange logins, security/audit concerns.
`;

  try {
    const apiRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: [
          {
            role: "system",
            content:
              "You are PingBot, an AI IT triage assistant for PingCheck, a managed IT and network services provider in Australia.\n\n" +
              "Your job:\n" +
              "1) Classify the user as HOME or BUSINESS based on their answers.\n" +
              "2) Ask at most 2 follow-up questions if needed to understand the issue (slow Wi-Fi, whole office offline, VPN, printers, security etc.).\n" +
              "3) Triage the issue and give 2–4 practical suggestions they can try now (plain, friendly language, no heavy jargon).\n" +
              "4) Then, based on their situation, recommend EXACTLY ONE PingCheck service package from the list below.\n" +
              "5) Finish with a short CTA offering ways to contact PingCheck (call, WhatsApp, or the contact form on the website).\n\n" +
              servicePackagesDescription +
              "\nImportant:\n- Keep answers short and clear.\n- DO NOT list all packages, only the single best match.\n- Use bullet points for steps. End with something like: 'If you’d like PingCheck to help, we can organise this package for you.'",
          },
          ...messages,
        ],
        max_tokens: 500,
      }),
    });

    const data = await apiRes.json();
    console.log("OpenAI API response:", JSON.stringify(data, null, 2));

    if (!apiRes.ok) {
      return res.status(500).json({
        error: "OpenAI API error",
        details: data,
      });
    }

    const answer =
      data.choices?.[0]?.message?.content ||
      "Sorry, I couldn’t generate a response. Please contact PingCheck directly.";

    res.status(200).json({ reply: answer });
  } catch (err) {
    console.error("PingBot error:", err);
    res.status(500).json({
      error: "PingBot server error",
      details: err.message || String(err),
    });
  }
}
