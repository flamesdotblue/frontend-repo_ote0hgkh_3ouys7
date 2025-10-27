import { Shield, Rocket, LogIn } from "lucide-react";

export default function HeaderNav() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/30 bg-black/50 border-b border-white/10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-cyan-400 shadow-lg shadow-cyan-500/20 grid place-items-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="text-white font-semibold tracking-tight">TeleRealm</p>
            <p className="text-xs text-white/60 -mt-0.5">Enter the realm beyond Telegram</p>
          </div>
        </div>
        <nav className="flex items-center gap-2">
          <a href="#features" className="text-sm text-white/70 hover:text-white transition">Features</a>
          <a href="#live" className="text-sm text-white/70 hover:text-white transition">Live</a>
          <a href="#topics" className="text-sm text-white/70 hover:text-white transition">Topics</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 hover:bg-white/15 border border-white/20 px-3 py-1.5 text-sm text-white transition">
          <LogIn className="h-4 w-4" />
          Login with Telegram
        </button>
      </div>
    </header>
  );
}
