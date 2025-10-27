import { useEffect, useMemo, useState } from "react";
import { Send, Image as ImageIcon, Paperclip, Wifi, WifiOff } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const sampleMessages = [
  { id: 1, user: "Ava", text: "Welcome to TeleRealm — look at that sleek UI!", time: "10:21" },
  { id: 2, user: "Drew", text: "Live sync from Telegram is buttery smooth.", time: "10:22" },
  { id: 3, user: "Kai", text: "Drop media here and it mirrors instantly.", time: "10:22" },
];

function Avatar({ name }) {
  const hue = useMemo(() => Math.floor((name.charCodeAt(0) * 17) % 360), [name]);
  return (
    <div
      className="h-8 w-8 rounded-full grid place-items-center text-white text-xs font-semibold"
      style={{ background: `linear-gradient(135deg, hsl(${hue} 90% 55%), hsl(${(hue + 60) % 360} 90% 55%))` }}
      aria-label={name}
      title={name}
    >
      {name[0]}
    </div>
  );
}

export default function LiveChatMock() {
  const [messages, setMessages] = useState(sampleMessages);
  const [online, setOnline] = useState(true);
  const [input, setInput] = useState("");

  useEffect(() => {
    const t = setInterval(() => setOnline((s) => !s), 5000);
    return () => clearInterval(t);
  }, []);

  function sendMessage() {
    if (!input.trim()) return;
    setMessages((m) => [
      ...m,
      { id: Date.now(), user: "You", text: input.trim(), time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) },
    ]);
    setInput("");
  }

  return (
    <section id="live" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Live chat preview</h2>
          <p className="text-white/60">WebSocket-feel animations, glass UI, per-topic gradients.</p>
        </div>
        <div className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs ${online ? "border-emerald-500/40 text-emerald-400" : "border-red-400/40 text-red-300"}`}>
          {online ? <Wifi className="h-3.5 w-3.5" /> : <WifiOff className="h-3.5 w-3.5" />} {online ? "Connected" : "Reconnecting"}
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 min-h-[420px] shadow-xl shadow-black/30">
          <div className="h-[320px] overflow-hidden">
            <div className="h-full overflow-y-auto pr-1 custom-scroll">
              <AnimatePresence initial={false}>
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.2 }}
                    className="mb-3 flex items-start gap-3"
                  >
                    <Avatar name={m.user} />
                    <div>
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-white">{m.user}</p>
                        <span className="text-[10px] text-white/50">{m.time}</span>
                      </div>
                      <p className="text-sm text-white/80 mt-0.5">{m.text}</p>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-4 flex items-center gap-2">
            <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/15 bg-white/10 text-white/80 hover:bg-white/15 transition" aria-label="Attach file">
              <Paperclip className="h-5 w-5" />
            </button>
            <button className="h-10 w-10 grid place-items-center rounded-xl border border-white/15 bg-white/10 text-white/80 hover:bg-white/15 transition" aria-label="Send image">
              <ImageIcon className="h-5 w-5" />
            </button>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              className="flex-1 h-10 rounded-xl bg-white/10 border border-white/15 px-3 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
              placeholder="Type a message..."
            />
            <button onClick={sendMessage} className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-4 h-10 text-white font-medium shadow hover:opacity-95 transition">
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 min-h-[420px] shadow-xl shadow-black/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {[
              { t: "Announcements", from: "from-indigo-500 to-purple-500" },
              { t: "Dev Chat", from: "from-cyan-400 to-blue-500" },
              { t: "Showcase", from: "from-rose-500 to-orange-500" },
              { t: "Q&A", from: "from-emerald-500 to-teal-400" },
              { t: "Media", from: "from-fuchsia-500 to-pink-500" },
              { t: "Files", from: "from-amber-400 to-red-500" },
            ].map((s) => (
              <div key={s.t} className="relative rounded-2xl overflow-hidden border border-white/10">
                <div className={`h-24 bg-gradient-to-br ${s.from} opacity-80`} />
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.08),transparent_50%)]" />
                <div className="absolute bottom-2 left-2 right-2">
                  <p className="text-sm font-medium text-white drop-shadow">{s.t}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-4 text-sm text-white/70">Per-topic gradients and glass effects create an atmospheric, GPU-accelerated feel.</p>
        </div>
      </div>
    </section>
  );
}
