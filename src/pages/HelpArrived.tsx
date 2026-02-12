import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { User, AlertTriangle, CheckCircle2 } from "lucide-react";

const HelpArrived = () => {
  const navigate = useNavigate();
  const { volunteerName } = useApp();

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      {/* Header */}
      <div className="animate-fade-in-up text-center mb-8">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-stable">
          <CheckCircle2 className="h-10 w-10 text-stable-foreground" />
        </div>
        <h1 className="text-elder-3xl font-extrabold text-foreground">Help has arrived</h1>
      </div>

      {/* Volunteer Card */}
      <div
        className="animate-fade-in-up mb-8 rounded-2xl bg-card border-2 border-border p-6 flex items-center gap-5 shadow-sm"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-calm">
          <User className="h-8 w-8 text-muted-foreground" />
        </div>
        <div>
          <p className="text-elder-xl font-bold text-foreground">{volunteerName}</p>
          <p className="text-elder-sm text-muted-foreground font-semibold">Community Volunteer</p>
        </div>
      </div>

      {/* Emergency Status */}
      <div
        className="animate-fade-in-up mb-8 rounded-2xl bg-warning/10 border-2 border-warning/30 p-5 flex items-center gap-4"
        style={{ animationDelay: "0.15s" }}
      >
        <AlertTriangle className="h-6 w-6 text-warning flex-shrink-0" />
        <p className="text-elder-base font-bold text-foreground">Emergency marked as active</p>
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 mt-auto">
        <button
          onClick={() => {/* escalate */}}
          className="w-full rounded-2xl border-2 border-emergency bg-emergency/10 py-5 text-elder-xl font-bold text-emergency transition-all active:scale-[0.98]"
        >
          🚑 Escalate to Ambulance
        </button>
        <button
          onClick={() => navigate("/completed")}
          className="w-full rounded-2xl bg-stable py-5 text-elder-xl font-bold text-stable-foreground shadow-lg transition-all active:scale-[0.98]"
        >
          Mark as Resolved
        </button>
      </div>
    </div>
  );
};

export default HelpArrived;
