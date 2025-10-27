import Spline from "@splinetool/react-spline";
import { Rocket, MessageCircle, Shield, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/6qzqkzM2VteQF1aD/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Subtle gradient veil so text remains readable; non-blocking */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(2,6,23,0.2),transparent_50%),radial-gradient(ellipse_at_bottom,rgba(2,6,23,0.6),rgba(2,6,23,0.9))]" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-28">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur">
            <Shield className="h-3.5 w-3.5" /> Secure OAuth + JWT • <Zap className="h-3.5 w-3.5" /> Real-time
          </div>
          <h1 className="mt-6 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Faster, cleaner, immersive chat for your Telegram group
          </h1>
          <p className="mt-4 text-lg text-white/70">
            TeleRealm bridges Telegram’s power with a cinematic, dark-minimal interface. Log in with Telegram, browse topics, and chat with live media sync.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#live"
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-cyan-400 px-5 py-3 text-white font-medium shadow-lg shadow-indigo-500/25 hover:opacity-95 transition"
            >
              <Rocket className="h-5 w-5" /> Enter the Realm
            </a>
            <a
              href="#features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-5 py-3 text-white hover:bg-white/15 transition"
            >
              <MessageCircle className="h-5 w-5" /> Explore Features
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
