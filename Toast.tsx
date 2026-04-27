interface ToastProps {
  message: string;
  type: "success" | "error" | "info";
}

export function Toast({ message, type }: ToastProps) {
  const colors = {
    success: "bg-green-600 border-green-400/30",
    error: "bg-red-600 border-red-400/30",
    info: "bg-blue-600 border-blue-400/30",
  };

  const icons = {
    success: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
      </svg>
    ),
    error: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ),
    info: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  };

  return (
    <div className="fixed top-20 right-4 z-[100] animate-[slideInRight_0.3s_ease-out]">
      <div
        className={`flex items-center gap-3 px-5 py-3 rounded-xl border shadow-2xl ${colors[type]} text-white font-medium text-sm`}
      >
        {icons[type]}
        <span>{message}</span>
      </div>
    </div>
  );
}
