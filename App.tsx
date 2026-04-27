import { useState } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RegistrationForm } from "./components/RegistrationForm";
import { AdminPanel } from "./components/AdminPanel";
import { Footer } from "./components/Footer";
import { Stats } from "./components/Stats";
import { Toast } from "./components/Toast";

export interface RegistrationRequest {
  name: string;
  uid: string;
  fb: string;
  status: "pending" | "approved" | "rejected";
  timestamp: number;
}

export default function App() {
  const [logged, setLogged] = useState(false);
  const [requests, setRequests] = useState<RegistrationRequest[]>([]);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" | "info" } | null>(null);

  const showToast = (message: string, type: "success" | "error" | "info" = "info") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const submitRegistration = (data: { name: string; uid: string; fb: string }) => {
    const newRequest: RegistrationRequest = {
      ...data,
      status: "pending",
      timestamp: Date.now(),
    };
    setRequests([...requests, newRequest]);
    showToast("Registration request submitted successfully!", "success");
  };

  const approveRequest = (index: number) => {
    setRequests((prev) =>
      prev.map((r, i) => (i === index ? { ...r, status: "approved" as const } : r))
    );
    showToast(`Approved: ${requests[index].name}`, "success");
  };

  const rejectRequest = (index: number) => {
    setRequests((prev) =>
      prev.map((r, i) => (i === index ? { ...r, status: "rejected" as const } : r))
    );
    showToast(`Rejected: ${requests[index].name}`, "error");
  };

  const deleteRequest = (index: number) => {
    const name = requests[index].name;
    setRequests((prev) => prev.filter((_, i) => i !== index));
    showToast(`Deleted: ${name}`, "info");
  };

  const pendingCount = requests.filter((r) => r.status === "pending").length;

  return (
    <div className="min-h-screen bg-zinc-950 text-white font-sans selection:bg-red-500/30">
      {toast && <Toast message={toast.message} type={toast.type} />}
      <Header />
      <Hero />
      <Stats
        totalMembers={requests.filter((r) => r.status === "approved").length + 150}
        pendingRequests={pendingCount}
        onlinePlayers={42}
        facebookMembers={320}
      />
      <section id="main-content" className="max-w-6xl mx-auto px-4 pb-16">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-2">
            <RegistrationForm onSubmit={submitRegistration} />
          </div>
          <div className="lg:col-span-3">
            <AdminPanel
              logged={logged}
              setLogged={setLogged}
              requests={requests}
              onApprove={approveRequest}
              onReject={rejectRequest}
              onDelete={deleteRequest}
              pendingCount={pendingCount}
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
