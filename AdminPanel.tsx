import { useState } from "react";
import type { RegistrationRequest } from "../App";

interface AdminPanelProps {
  logged: boolean;
  setLogged: (value: boolean) => void;
  requests: RegistrationRequest[];
  onApprove: (index: number) => void;
  onReject: (index: number) => void;
  onDelete: (index: number) => void;
  pendingCount: number;
}

export function AdminPanel({
  logged,
  setLogged,
  requests,
  onApprove,
  onReject,
  onDelete,
  pendingCount,
}: AdminPanelProps) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [filter, setFilter] = useState<"all" | "pending" | "approved" | "rejected">("all");
  const [showPass, setShowPass] = useState(false);

  const login = () => {
    if (user === "snkmultiplayerofficial" && pass === "snkofficial750") {
      setLogged(true);
    } else {
      alert("Invalid credentials. Please try again.");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") login();
  };

  const filteredRequests = requests.filter((r) => {
    if (filter === "all") return true;
    return r.status === filter;
  });

  const statusBadge = (status: RegistrationRequest["status"]) => {
    const styles = {
      pending: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
      approved: "bg-green-500/10 text-green-400 border-green-500/30",
      rejected: "bg-red-500/10 text-red-400 border-red-500/30",
    };
    return (
      <span className={`text-xs font-medium px-2 py-0.5 rounded-full border ${styles[status]}`}>
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 md:p-8">
      {!logged ? (
        <div className="max-w-sm mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-lg bg-blue-500/10">
              <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <div>
              <h2 className="text-2xl font-bold">Admin Login</h2>
              <p className="text-xs text-zinc-500">Restricted area</p>
            </div>
          </div>

          <div className="space-y-3">
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Username</label>
              <input
                className="w-full p-3.5 bg-black/50 border border-zinc-800 hover:border-zinc-700 rounded-xl text-white placeholder-zinc-600 transition-all outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                placeholder="Admin username"
                value={user}
                onChange={(e) => setUser(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">Password</label>
              <div className="relative">
                <input
                  type={showPass ? "text" : "password"}
                  className="w-full p-3.5 pr-12 bg-black/50 border border-zinc-800 hover:border-zinc-700 rounded-xl text-white placeholder-zinc-600 transition-all outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/10"
                  placeholder="••••••••"
                  value={pass}
                  onChange={(e) => setPass(e.target.value)}
                  onKeyDown={handleKeyDown}
                />
                <button
                  type="button"
                  onClick={() => setShowPass(!showPass)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
                >
                  {showPass ? (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <button
              onClick={login}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 px-6 py-3.5 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-blue-900/30 hover:shadow-blue-900/50"
            >
              Sign In
            </button>
          </div>

          <p className="text-xs text-zinc-600 text-center mt-4">
            Only group admins can access this panel
          </p>
        </div>
      ) : (
        <div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-green-500/10">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <div>
                <h2 className="text-xl font-bold">Admin Dashboard</h2>
                <p className="text-xs text-zinc-500">
                  {pendingCount} pending • {requests.length} total
                </p>
              </div>
            </div>
            <button
              onClick={() => setLogged(false)}
              className="text-sm text-zinc-500 hover:text-red-400 transition-colors flex items-center gap-1.5"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              Sign Out
            </button>
          </div>

          {/* Filter tabs */}
          <div className="flex gap-2 mb-4 flex-wrap">
            {(["all", "pending", "approved", "rejected"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  filter === tab
                    ? "bg-zinc-800 text-white"
                    : "bg-zinc-900/50 text-zinc-500 hover:text-zinc-300 border border-zinc-800/50"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                {tab === "pending" && pendingCount > 0 && (
                  <span className="ml-1.5 bg-yellow-500/20 text-yellow-400 px-1.5 py-0.5 rounded-full text-[10px]">
                    {pendingCount}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Request list */}
          <div className="space-y-2 max-h-[500px] overflow-y-auto pr-1 custom-scrollbar">
            {filteredRequests.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-4xl mb-3 opacity-20">📭</div>
                <p className="text-zinc-500 text-sm">No {filter === "all" ? "" : filter} requests</p>
              </div>
            ) : (
              filteredRequests.map((r) => {
                const globalIndex = requests.indexOf(r);
                return (
                  <div
                    key={globalIndex}
                    className="bg-black/40 border border-zinc-800/50 rounded-xl p-4 hover:border-zinc-700/50 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-zinc-200 truncate">{r.name}</span>
                          {statusBadge(r.status)}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-xs text-zinc-500">
                          <span className="flex items-center gap-1">
                            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0" />
                            </svg>
                            UID: {r.uid}
                          </span>
                          <a
                            href={r.fb.startsWith("http") ? r.fb : `https://${r.fb}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300 truncate"
                          >
                            <svg className="w-3.5 h-3.5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                            </svg>
                            Profile
                          </a>
                          <span className="text-zinc-600">
                            {new Date(r.timestamp).toLocaleDateString()}
                          </span>
                        </div>
                      </div>

                      {/* Action buttons */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {r.status === "pending" && (
                          <>
                            <button
                              onClick={() => onApprove(globalIndex)}
                              className="p-2 rounded-lg bg-green-500/10 text-green-400 hover:bg-green-500/20 transition-all hover:scale-105"
                              title="Approve"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </button>
                            <button
                              onClick={() => onReject(globalIndex)}
                              className="p-2 rounded-lg bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all hover:scale-105"
                              title="Reject"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                              </svg>
                            </button>
                          </>
                        )}
                        <button
                          onClick={() => onDelete(globalIndex)}
                          className="p-2 rounded-lg bg-zinc-800/50 text-zinc-500 hover:bg-red-500/10 hover:text-red-400 transition-all hover:scale-105"
                          title="Delete"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      )}
    </div>
  );
}
