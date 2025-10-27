import HeaderNav from "./components/HeaderNav";
import HeroSection from "./components/HeroSection";
import LiveChatMock from "./components/LiveChatMock";
import FeaturesGrid from "./components/FeaturesGrid";

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(99,102,241,0.25),transparent),radial-gradient(800px_400px_at_100%_10%,rgba(168,85,247,0.18),transparent),radial-gradient(1000px_500px_at_0%_0%,rgba(34,211,238,0.16),transparent)] bg-slate-950 text-white">
      <HeaderNav />
      <HeroSection />
      <LiveChatMock />
      <FeaturesGrid />

      <footer className="mt-16 border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4 text-white/60">
          <p className="text-sm">© {new Date().getFullYear()} TeleRealm. Enter the realm beyond Telegram.</p>
          <div className="flex items-center gap-4 text-sm">
            <a href="#features" className="hover:text-white">Features</a>
            <a href="#live" className="hover:text-white">Live</a>
            <a href="#topics" className="hover:text-white">Topics</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
