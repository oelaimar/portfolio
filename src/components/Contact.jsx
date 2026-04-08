import { Mail, Phone, Send } from "lucide-react";
import { useMemo, useState } from "react";

const Contact = ({ darkMode }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const dark = {
    heading: "text-white",
    text: "text-gray-300",
    card: "bg-white/5 border-white/10",
    input: "bg-white/5 border-white/10 text-white placeholder:text-gray-500",
    label: "text-gray-300",
  };
  const light = {
    heading: "text-gray-900",
    text: "text-gray-700",
    card: "bg-white/70 border-gray-200",
    input: "bg-white border-gray-200 text-gray-900 placeholder:text-gray-400",
    label: "text-gray-700",
  };
  const t = darkMode ? dark : light;

  const mailto = useMemo(() => {
    const subject = `Portfolio contact from ${name || "someone"}`;
    const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
    return `mailto:oussama.el.aimar@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }, [name, email, message]);

  return (
    <section id="contact" className="relative z-10">
      <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-16 lg:py-24" data-aos="fade-up">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className={`text-3xl sm:text-4xl font-bold ${t.heading}`}>
            Get in <span className="text-orange-500">Touch</span>
          </h2>
          <p className={`mt-4 ${t.text}`}>
            Want to work together? Send a message and I’ll get back to you.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className={`rounded-2xl border ${t.card} backdrop-blur-lg p-6 shadow-lg`}>
            <h3 className={`text-lg font-bold ${t.heading}`}>Contact details</h3>
            <p className={`mt-2 ${t.text}`}>You can also reach me directly.</p>

            <div className="mt-5 space-y-3">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10">
                  <Mail className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className={`text-sm ${t.text}`}>Email</p>
                  <a className={`font-semibold ${t.heading}`} href="mailto:oussama.el.aimar@gmail.com">
                    oussama.el.aimar@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-orange-500/10">
                  <Phone className="w-5 h-5 text-orange-500" />
                </div>
                <div>
                  <p className={`text-sm ${t.text}`}>Phone</p>
                  <a className={`font-semibold ${t.heading}`} href="tel:+212655875028">
                    +212 655 87 50 28
                  </a>
                </div>
              </div>
            </div>
          </div>

          <form className={`rounded-2xl border ${t.card} backdrop-blur-lg p-6 shadow-lg`}>
            <h3 className={`text-lg font-bold ${t.heading}`}>Message me</h3>

            <div className="mt-4 grid grid-cols-1 gap-4">
              <div>
                <label className={`text-sm font-medium ${t.label}`} htmlFor="name">
                  Name
                </label>
                <input
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/50 ${t.input}`}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className={`text-sm font-medium ${t.label}`} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`mt-2 w-full rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/50 ${t.input}`}
                  placeholder="you@example.com"
                  type="email"
                />
              </div>

              <div>
                <label className={`text-sm font-medium ${t.label}`} htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`mt-2 w-full min-h-[140px] rounded-xl border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500/50 ${t.input}`}
                  placeholder="Tell me about your project…"
                />
              </div>

              <a
                href={mailto}
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-full text-white font-semibold bg-linear-to-r from-orange-500 to-amber-500 shadow-md hover:shadow-lg transition-shadow"
              >
                Send <Send className="w-4 h-4" />
              </a>
              <p className={`text-xs ${t.text}`}>This will open your email app with the message pre-filled.</p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

