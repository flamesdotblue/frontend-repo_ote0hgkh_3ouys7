import { Shield, Zap, Image as ImageIcon, Globe, Lock, Cpu } from "lucide-react";

const cards = [
  {
    title: "Telegram OAuth",
    desc: "Verified login with Telegram, secured by JWT and HTTPS.",
    icon: Shield,
    gradient: "from-emerald-500 to-teal-400",
  },
  {
    title: "Real-time Messaging",
    desc: "WebSocket-powered updates for messages, media, and presence.",
    icon: Zap,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    title: "Media & Files",
    desc: "Mirror photos, videos, and documents via the Telegram Bot API.",
    icon: ImageIcon,
    gradient: "from-rose-500 to-orange-500",
  },
  {
    title: "Global Routing",
    desc: "Optimized edge and GPU-accelerated transitions for a silky UI.",
    icon: Globe,
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Hardening",
    desc: "Role-based access, permissions, and end-to-end best practices.",
    icon: Lock,
    gradient: "from-slate-400 to-slate-600",
  },
  {
    title: "Performance",
    desc: "Glass morphism, topic gradients, and buttery animations.",
    icon: Cpu,
    gradient: "from-amber-400 to-red-500",
  },
];

export default function FeaturesGrid() {
  return (
    <section id="features" className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white">Why TeleRealm</h2>
        <p className="text-white/60">A cinematic interface layered over Telegram’s battle-tested backbone.</p>
      </div>
      <div id="topics" className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map(({ title, desc, icon: Icon, gradient }) => (
          <article key={title} className="group relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-4 overflow-hidden shadow-xl shadow-black/30">
            <div className={`absolute -top-16 -right-16 h-40 w-40 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-2xl pointer-events-none`} />
            <div className="flex items-start gap-3">
              <div className={`h-10 w-10 rounded-xl grid place-items-center text-white bg-gradient-to-br ${gradient} shadow-lg shadow-black/20`}>
                <Icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-white font-semibold">{title}</h3>
                <p className="text-sm text-white/70 mt-1">{desc}</p>
              </div>
            </div>
            <div className="mt-4 h-[1px] w-full bg-gradient-to-r from-white/0 via-white/10 to-white/0" />
            <button className="mt-4 text-xs text-white/80 underline-offset-4 decoration-white/30 hover:underline">Learn more</button>
          </article>
        ))}
      </div>
    </section>
  );
}
