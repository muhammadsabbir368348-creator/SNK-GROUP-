export function Hero() {
  return (
    <section className="relative pt-16 overflow-hidden">
      {/* Background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: i % 3 === 0 ? "#ef4444" : i % 3 === 1 ? "#3b82f6" : "#a855f7",
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${Math.random() * 3 + 2}s`,
              opacity: 0.4 + Math.random() * 0.3,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 py-24 md:py-36 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 rounded-full px-4 py-1.5 mb-6 animate-[fadeIn_0.5s_ease-out]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
          </span>
          <span className="text-xs text-zinc-400 font-medium">Online Now • 42 Players</span>
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter mb-6">
          <span className="bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            SNK
          </span>{" "}
          <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent animate-pulse">
            MULTIPLAYER
          </span>
        </h1>

        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-10 leading-relaxed">
          Join the ultimate gaming community. Compete, connect, and conquer with players
          from around the world. Official SNK Multiplayer Group on Facebook.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="https://www.facebook.com/share/g/1B31ncUpo9/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center gap-3 bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-xl font-bold text-lg transition-all hover:scale-105 active:scale-95 shadow-xl shadow-blue-900/40 hover:shadow-blue-900/60"
          >
            <svg className="w-6 h-6 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            Join Facebook Group
          </a>
          <a
            href="#main-content"
            className="inline-flex items-center gap-2 border border-zinc-700 hover:border-zinc-500 px-8 py-4 rounded-xl font-semibold transition-all hover:bg-zinc-800/50"
          >
            Register Now
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </a>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-3xl mx-auto">
          {[
            { emoji: "🏆", title: "Tournaments", desc: "Weekly Events" },
            { emoji: "👥", title: "320+", desc: "FB Members" },
            { emoji: "🎮", title: "Multi-Game", desc: "All Platforms" },
            { emoji: "💬", title: "Active Chat", desc: "24/7 Community" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-zinc-900/50 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 hover:border-red-900/30 hover:bg-zinc-900/80 transition-all group"
            >
              <div className="text-2xl mb-1 group-hover:scale-110 transition-transform inline-block">
                {item.emoji}
              </div>
              <div className="font-bold text-sm text-zinc-200">{item.title}</div>
              <div className="text-xs text-zinc-500">{item.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="relative h-16 bg-gradient-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
