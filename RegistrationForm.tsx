import { useState } from "react";

interface RegistrationFormProps {
  onSubmit: (data: { name: string; uid: string; fb: string }) => void;
}

export function RegistrationForm({ onSubmit }: RegistrationFormProps) {
  const [form, setForm] = useState({ name: "", uid: "", fb: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [focused, setFocused] = useState<string | null>(null);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.uid.trim()) errs.uid = "Game UID is required";
    if (!form.fb.trim()) errs.fb = "Facebook link is required";
    else if (!form.fb.includes("facebook.com") && !form.fb.includes("fb.com"))
      errs.fb = "Enter a valid Facebook URL";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    onSubmit(form);
    setForm({ name: "", uid: "", fb: "" });
  };

  const inputClass = (field: string) =>
    `w-full p-3.5 bg-black/50 border rounded-xl text-white placeholder-zinc-600 transition-all outline-none ${
      focused === field
        ? "border-red-500/50 ring-2 ring-red-500/10"
        : errors[field]
        ? "border-red-500/50"
        : "border-zinc-800 hover:border-zinc-700"
    }`;

  return (
    <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-6 md:p-8 sticky top-20">
      <div className="flex items-center gap-3 mb-1">
        <div className="p-2 rounded-lg bg-red-500/10">
          <svg className="w-5 h-5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z" />
          </svg>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Register</h2>
          <p className="text-xs text-zinc-500">Join the community</p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-6 space-y-4">
        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
            Full Name
          </label>
          <input
            className={inputClass("name")}
            placeholder="Enter your gaming name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
          />
          {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
            Game UID
          </label>
          <input
            className={inputClass("uid")}
            placeholder="Your in-game ID"
            value={form.uid}
            onChange={(e) => setForm({ ...form, uid: e.target.value })}
            onFocus={() => setFocused("uid")}
            onBlur={() => setFocused(null)}
          />
          {errors.uid && <p className="text-red-400 text-xs mt-1 ml-1">{errors.uid}</p>}
        </div>

        <div>
          <label className="block text-xs font-medium text-zinc-400 mb-1.5 ml-1">
            Facebook Profile Link
          </label>
          <input
            className={inputClass("fb")}
            placeholder="https://facebook.com/your.profile"
            value={form.fb}
            onChange={(e) => setForm({ ...form, fb: e.target.value })}
            onFocus={() => setFocused("fb")}
            onBlur={() => setFocused(null)}
          />
          {errors.fb && <p className="text-red-400 text-xs mt-1 ml-1">{errors.fb}</p>}
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 px-6 py-3.5 rounded-xl font-bold text-lg transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xl shadow-red-900/30 hover:shadow-red-900/50 mt-2"
        >
          Submit Registration
        </button>
      </form>

      <p className="text-xs text-zinc-600 text-center mt-4">
        All registrations are reviewed by admin before approval
      </p>
    </div>
  );
}
