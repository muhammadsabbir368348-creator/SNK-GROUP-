interface StatsProps {
  totalMembers: number;
  pendingRequests: number;
  onlinePlayers: number;
  facebookMembers: number;
}

export function Stats({ totalMembers, pendingRequests, onlinePlayers, facebookMembers }: StatsProps) {
  const stats = [
    {
      label: "Total Members",
      value: totalMembers,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      color: "from-red-500 to-red-700",
      bgGlow: "bg-red-500/10",
    },
    {
      label: "Pending Requests",
      value: pendingRequests,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
      color: "from-yellow-500 to-yellow-700",
      bgGlow: "bg-yellow-500/10",
    },
    {
      label: "Online Players",
      value: onlinePlayers,
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      color: "from-green-500 to-green-700",
      bgGlow: "bg-green-500/10",
    },
    {
      label: "FB Members",
      value: facebookMembers,
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
      color: "from-blue-500 to-blue-700",
      bgGlow: "bg-blue-500/10",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 -mt-8 relative z-10 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {stats.map((stat, i) => (
          <div
            key={i}
            className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800/50 rounded-xl p-4 hover:border-zinc-700/50 transition-all group"
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`p-2 rounded-lg ${stat.bgGlow} text-zinc-300 group-hover:scale-110 transition-transform`}>
                {stat.icon}
              </div>
            </div>
            <div className={`text-2xl font-black bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
              {stat.value.toLocaleString()}
            </div>
            <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
