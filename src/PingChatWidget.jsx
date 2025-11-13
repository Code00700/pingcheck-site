import { useState } from "react";

export default function PingChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Hi, I’m PingBot 👋\n\nAre you a **Home user** or a **Business user**?\n\nPlease also tell me in 1–2 sentences what issue you’re facing (e.g. slow Wi-Fi, VPN not working, whole office offline, printers dropping, etc.).",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const sendMessage = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const newMessages = [
      ...messages,
      { role: "user", content: input.trim() },
    ];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/pingchat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            data.reply ||
            "Sorry, I had trouble generating a response. You can call or WhatsApp PingCheck instead.",
        },
      ]);
    } catch (err) {
      console.error(err);
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content:
            "Sorry, I couldn’t reach the PingCheck AI right now. You can call us or message us on WhatsApp instead.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating toggle button (bottom-right) */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-24 right-4 z-40 rounded-full bg-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-indigo-500"
      >
        💬 Chat with PingBot
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-4 z-40 w-80 max-w-[90vw] rounded-2xl border border-slate-700 bg-slate-950 text-slate-100 shadow-2xl flex flex-col">
          <div className="flex items-center justify-between px-3 py-2 border-b border-slate-800">
            <div className="text-sm font-semibold">PingBot – IT Triage</div>
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-slate-400 hover:text-slate-200"
            >
              ✕
            </button>
          </div>

          <div className="flex-1 space-y-2 overflow-y-auto p-3 text-sm max-h-80">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`whitespace-pre-line ${
                  m.role === "assistant"
                    ? "text-slate-100"
                    : "text-emerald-300 text-right"
                }`}
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="text-xs text-slate-400">PingBot is thinking…</div>
            )}
          </div>

          <form
            onSubmit={sendMessage}
            className="border-t border-slate-800 p-2 flex gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-xl bg-slate-900 px-3 py-2 text-xs text-slate-100 border border-slate-700"
              placeholder="Type your reply…"
            />
            <button
              type="submit"
              disabled={loading}
              className="rounded-xl bg-emerald-500 px-3 py-2 text-xs font-semibold text-slate-900 disabled:opacity-60"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
