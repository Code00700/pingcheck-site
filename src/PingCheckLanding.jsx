import PingChatWidget from "./PingChatWidget";

const brand = {
  phonePrimary: "1300 000 000",
  phoneMobile: "+61 400 123 456",
  email: "hello@pingcheck.com.au",
  whatsappLink:
    "https://wa.me/61400123456?text=Hi%20PingCheck!%20I%27d%20like%20help%20with%20my%20IT%20network.",
  address: "Melbourne, Australia",
  logoSrc: "/logo-pingcheck.svg",
  partnerBadges: [
    { name: "Cisco Meraki", src: "/badges/meraki.svg" },
    { name: "Microsoft", src: "/badges/microsoft.svg" },
    { name: "Cisco", src: "/badges/cisco.svg" },
    { name: "AWS", src: "/badges/aws.svg" },
  ],
};

export default function PingCheckLanding() {
  const handleGenericFormSubmit = async (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    try {
      await fetch("https://formspree.io/f/your-id", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: fd,
      });
      alert("Thanks! We'll be in touch shortly.");
      e.currentTarget.reset();
    } catch (err) {
      alert("Submission failed. Please call us.");
    }
  };

  return (
    <div className="min-h-screen w-full font-sans bg-slate-950 text-slate-900">
      {/* Sticky Top Bar */}
      <div className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2">
          <div className="flex items-center gap-3">
            {brand.logoSrc ? (
              <img
                src={brand.logoSrc}
                alt="PingCheck logo"
                className="h-8 w-8 rounded-lg"
              />
            ) : (
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-indigo-500 to-fuchsia-500" />
            )}
            <span className="text-lg font-bold tracking-tight text-white">
              PingCheck
            </span>
            <span className="hidden text-xs text-slate-400 sm:inline">
              Remote Network Health. Made Simple.
            </span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <a
              href={`tel:${brand.phonePrimary}`}
              className="rounded-full bg-emerald-500 px-3 py-1.5 font-semibold text-slate-900 shadow hover:opacity-90"
            >
              Call {brand.phonePrimary}
            </a>
            <a
              href={brand.whatsappLink}
              className="hidden rounded-full border border-slate-600 px-3 py-1.5 font-medium text-slate-200 hover:bg-slate-800 sm:inline"
            >
              WhatsApp
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="hidden rounded-full border border-slate-600 px-3 py-1.5 font-medium text-slate-200 hover:bg-slate-800 md:inline"
            >
              Email
            </a>
          </div>
        </div>
      </div>

      {/* HERO – FULL SCREEN */}
      <section className="relative isolate bg-gradient-to-br from-white via-sky-100 to-sky-300 text-slate-900 min-h-screen flex items-center">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 md:grid-cols-2">
          
          {/* LEFT SIDE: TEXT + BUTTONS */}
          <div className="flex flex-col">
            <h1 className="text-4xl font-black leading-tight md:text-5xl">
              Smarter IT. Stronger Networks.{" "}
              <span className="opacity-90">Secure Automation.</span>
            </h1>

            <p className="mt-4 max-w-prose text-slate-700 text-lg">
              PingCheck keeps your business and home technology fast, protected, and easy to manage — from Wi-Fi and cybersecurity to cloud and automation.
            </p>

            {/* MAIN BUTTON SECTION – BIGGER FOR HERO */}
            <div className="mt-10 w-full max-w-xl grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Home Users */}
              <a
                href="/home"
                className="rounded-2xl bg-white px-10 py-6 text-center font-bold text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition text-xl"
              >
                🏡 Home Users
              </a>

              {/* Business Users */}
              <a
                href="/business"
                className="rounded-2xl bg-emerald-500 px-10 py-6 text-center font-bold text-slate-900 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition text-xl"
              >
                🏢 Business Users
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-slate-600">
              <div>🇦🇺 Melbourne-based</div>
              <div>✅ 24/7 Support</div>
              <div>🔒 Cybersecurity First</div>
            </div>
          </div>

          {/* RIGHT SIDE – FREE IT HEALTH CHECK */}
          <div className="flex justify-center md:justify-end">
            <div className="rounded-3xl border border-slate-200/80 bg-white/85 text-slate-900 shadow-xl shadow-sky-300/40 backdrop-blur-xl p-8 max-w-md">
              <p className="text-xs font-semibold uppercase tracking-wide text-indigo-700">
                Free IT Health Check
              </p>
              <h2 className="mt-2 text-3xl font-bold">
                Is your network as healthy as you think?
              </h2>
              <p className="mt-3 text-sm text-slate-700 leading-relaxed">
                We’ll review your Wi-Fi, security, internet, and core IT systems — and show you where performance or risks may exist.
              </p>

              <ul className="mt-4 space-y-1 text-sm text-slate-700">
                <li>• Quick remote check by an engineer</li>
                <li>• Plain-English report (no jargon)</li>
                <li>• Priority recommendations</li>
              </ul>

              <a
                href="#contact"
                className="mt-6 inline-flex w-full items-center justify-center rounded-2xl bg-indigo-600 px-6 py-3 text-center text-sm font-semibold text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition"
              >
                🔍 Get my free IT health check
              </a>

              <p className="mt-2 text-[11px] text-slate-500">
                No charge. No lock-in. Just clear advice tailored to your home or business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="text-center text-3xl font-bold text-white">
          What We Do
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-slate-400">
          Fast, secure, and scalable technology for homes and businesses.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {[
            { t: "Managed IT & Networks", d: "Design, deployment, and 24/7 monitoring for Wi-Fi, switches, and SD-WAN." },
            { t: "Cybersecurity", d: "Firewalls, endpoint protection, email security, and awareness." },
            { t: "Cloud & M365", d: "Migration, backup, identity, and modern workplace." },
            { t: "Automation & ERP", d: "Workflow automation, integrations, dashboards." },
            { t: "Helpdesk", d: "Friendly support by phone, chat, and remote access." },
            { t: "Advisory", d: "vCIO services, audits, IT roadmaps." },
          ].map((c, i) => (
            <div key={i} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-sm">
              <div className="text-lg font-semibold text-white">{c.t}</div>
              <p className="mt-1 text-sm text-slate-300">{c.d}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-slate-900">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h3 className="text-center text-2xl font-bold text-white">
            What our clients say
          </h3>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              { q: "PingCheck stabilised our Wi-Fi and secured endpoints in one week.", a: "Retail COO, Melbourne" },
              { q: "Fast response and clear reporting. Our team loves the support.", a: "Clinic Manager, Sydney" },
              { q: "They automated our onboarding and saved hours monthly.", a: "Ops Lead, Brisbane" },
            ].map((t, i) => (
              <div key={i} className="rounded-2xl border border-slate-800 bg-slate-950 p-5 text-slate-200">
                <p>“{t.q}”</p>
                <p className="mt-3 text-sm text-slate-500">— {t.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Badges */}
      <section className="bg-slate-950">
        <div className="mx-auto max-w-7xl px-6 py-12">
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold text-white">
                Why Choose PingCheck
              </h3>
              <ul className="mt-4 space-y-2 text-slate-300">
                <li>• 🇦🇺 Local engineers</li>
                <li>• 🔒 Security-first approach</li>
                <li>• 📈 Clear pricing & reporting</li>
                <li>• 🧩 Vendor-neutral solutions</li>
              </ul>
              <div className="mt-6 flex flex-wrap items-center gap-3 text-sm">
                <a href={`tel:${brand.phonePrimary}`} className="rounded-xl bg-emerald-500 px-4 py-2 font-semibold text-slate-900">
                  Call {brand.phonePrimary}
                </a>
                <a href="#contact" className="rounded-xl border border-slate-700 px-4 py-2 font-semibold text-slate-100">
                  Request a Quote
                </a>
              </div>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6 shadow-sm">
              <div className="text-sm font-semibold text-slate-400">Trusted by & Certified with</div>
              <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-4">
                {brand.partnerBadges.map((b, i) => (
                  <div key={i} className="flex items-center justify-center rounded-xl border border-slate-800 bg-slate-900 p-3">
                    <img src={b.src} alt={b.name} className="h-8" />
                  </div>
                ))}
              </div>
              <div className="mt-6 text-xs text-slate-500">Logos shown for illustration.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-3xl font-bold text-white">Speak to an engineer today</h3>
            <p className="mt-2 text-slate-400">
              Fast answers and friendly help. We’ll assess your needs and propose a simple plan.
            </p>

            <div className="mt-6 space-y-2 text-slate-300">
              <div>
                📞 <a className="font-semibold" href={`tel:${brand.phonePrimary}`}>{brand.phonePrimary}</a>{" "}
                <span className="text-slate-500">(Sales & Support)</span>
              </div>
              <div>
                📱 <a className="font-semibold" href={`tel:${brand.phoneMobile}`}>{brand.phoneMobile}</a>{" "}
                <span className="text-slate-500">(Mobile)</span>
              </div>
              <div>
                ✉️ <a className="font-semibold" href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
              <div>📍 {brand.address}</div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-sm">
            <div className="text-sm font-semibold text-slate-400">Request a callback</div>

            <form className="mt-3 grid gap-3" onSubmit={handleGenericFormSubmit}>
              <input className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" name="name" placeholder="Full name" required />
              <input className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" name="phone" placeholder="Phone" required />
              <input className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" name="email" placeholder="Email (optional)" />
              <textarea className="rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-slate-100" name="message" placeholder="What do you need help with?" rows={4} />

              <button type="submit" className="rounded-xl bg-emerald-500 px-4 py-3 font-semibold text-slate-900 hover:opacity-90">
                Request Callback
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Floating Action Bar (original simple version) */}
      <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2">
        <div className="flex gap-2 rounded-full border border-slate-700 bg-slate-950/95 p-2 shadow-lg backdrop-blur">
          <a href={`tel:${brand.phonePrimary}`} className="rounded-full bg-emerald-500 px-4 py-2 font-semibold text-slate-900">
            📞 Call
          </a>
          <a href={brand.whatsappLink} className="rounded-full bg-slate-900 px-4 py-2 font-semibold text-white">
            💬 WhatsApp
          </a>
          <a href="#contact" className="hidden sm:inline rounded-full border border-slate-600 px-4 py-2 font-semibold text-slate-100">
            Contact
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 border-t border-slate-800 bg-slate-950">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 md:flex-row">
          <div className="text-sm text-slate-500">© {new Date().getFullYear()} PingCheck. All rights reserved.</div>
          <div className="flex items-center gap-4 text-sm text-slate-500">
            <a href="#" className="hover:underline">Privacy</a>
            <a href="#" className="hover:underline">Terms</a>
            <a href="#" className="hover:underline">Support</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
