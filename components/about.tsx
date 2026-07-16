import { Shield, Layers, Link2 } from "lucide-react";

export function About() {
  return (
    <section className="w-full bg-[#050505] py-24 relative overflow-hidden border-t border-white/5">
      {/* Background glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none opacity-20">
        <div className="w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(99,102,241,0.15),transparent_70%)] blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-semibold tracking-wider uppercase bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent mb-3">
            About Profile.io
          </h2>
          <h3 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight mb-6">
            One link to share{" "}
            <span className="bg-gradient-to-r from-pink-500 via-blue-500 to-emerald-400 bg-clip-text text-transparent">
              everything you build.
            </span>
          </h3>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            Profile.io is a modern, developer-focused link-in-bio platform built to consolidate your professional and social identity. Create a clean public landing page, manage all your active URLs, and share your profile in seconds.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Card 1 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0c0d12]/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0c0d12]/80 hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-500/20 text-pink-400 group-hover:scale-110 transition-transform duration-300">
              <Link2 className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Single Shareable Link</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Consolidate your website, GitHub, projects, and socials into a single, elegant URL (`/public/username`) that looks amazing on any screen.
            </p>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0c0d12]/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0c0d12]/80 hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <Layers className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Dynamic Dashboard</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Manage your personal details, description, avatar image, and social link collections dynamically through a simple and intuitive interface.
            </p>
          </div>

          {/* Card 3 */}
          <div className="group relative rounded-2xl border border-white/10 bg-[#0c0d12]/50 p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-[#0c0d12]/80 hover:shadow-[0_20px_50px_rgba(255,255,255,0.02)]">
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/20 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <Shield className="h-6 w-6" />
            </div>
            <h4 className="text-xl font-semibold text-white mb-3">Secure Infrastructure</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Powered by Next.js Server Actions and Supabase authentication, ensuring your dashboard data and assets are securely managed and fast to load.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
