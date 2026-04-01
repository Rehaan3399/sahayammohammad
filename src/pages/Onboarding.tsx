import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { User, Phone, Heart, ShieldCheck, Users, Stethoscope } from "lucide-react";

type UserRole = "patient" | "volunteer" | "family";

const roles: { value: UserRole; label: string; icon: React.ReactNode; description: string }[] = [
  { value: "patient", label: "Patient", icon: <Stethoscope className="h-8 w-8" />, description: "I need help" },
  { value: "volunteer", label: "Volunteer", icon: <ShieldCheck className="h-8 w-8" />, description: "I want to help" },
  { value: "family", label: "Family Member", icon: <Users className="h-8 w-8" />, description: "I care for someone" },
];

const Onboarding = () => {
  const navigate = useNavigate();
  const { setProfile } = useApp();
  const [step, setStep] = useState<"role" | "details">("role");
  const [selectedRole, setSelectedRole] = useState<UserRole | null>(null);
  const [form, setForm] = useState({ name: "", age: "", emergencyContact: "", medicalCondition: "" });

  const canSubmit = form.name.trim() && form.age.trim() && form.emergencyContact.trim();

  const handleSave = () => {
    if (!canSubmit || !selectedRole) return;
    setProfile({ ...form, role: selectedRole });
    navigate("/home");
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-border bg-card px-5 py-4 text-elder-lg font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  if (step === "role") {
    return (
      <div className="flex min-h-screen flex-col bg-background px-6 py-10">
        <div className="animate-fade-in-up flex flex-col gap-3 mb-8">
          <h1 className="text-elder-3xl font-extrabold text-foreground">Welcome!</h1>
          <p className="text-elder-base text-muted-foreground">Who are you?</p>
        </div>

        <div className="flex flex-col gap-4 flex-1">
          {roles.map((role) => (
            <button
              key={role.value}
              onClick={() => setSelectedRole(role.value)}
              className={`animate-fade-in-up flex items-center gap-5 rounded-2xl border-2 p-5 transition-all active:scale-[0.98] ${
                selectedRole === role.value
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-border bg-card text-foreground"
              }`}
            >
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-full ${
                  selectedRole === role.value ? "bg-primary text-primary-foreground" : "bg-calm text-muted-foreground"
                }`}
              >
                {role.icon}
              </div>
              <div className="text-left">
                <p className="text-elder-xl font-bold">{role.label}</p>
                <p className="text-elder-sm text-muted-foreground font-semibold">{role.description}</p>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={() => selectedRole && setStep("details")}
          disabled={!selectedRole}
          className="mt-8 w-full rounded-2xl bg-primary py-5 text-elder-xl font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
        >
          Continue
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      <div className="animate-fade-in-up flex flex-col gap-3 mb-8">
        <button onClick={() => setStep("role")} className="text-elder-sm text-primary font-bold self-start mb-2">
          ← Back
        </button>
        <h1 className="text-elder-3xl font-extrabold text-foreground">Your Details</h1>
        <p className="text-elder-base text-muted-foreground">Tell us about yourself.</p>
      </div>

      <div className="flex flex-col gap-5 flex-1">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <User className="h-5 w-5 text-primary" /> Your Name
          </label>
          <input className={inputClass} placeholder="Enter your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <User className="h-5 w-5 text-primary" /> Your Age
          </label>
          <input className={inputClass} placeholder="Enter your age" type="number" value={form.age} onChange={(e) => setForm({ ...form, age: e.target.value })} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <Phone className="h-5 w-5 text-primary" /> Emergency Contact Number
          </label>
          <input className={inputClass} placeholder="Phone number" type="tel" value={form.emergencyContact} onChange={(e) => setForm({ ...form, emergencyContact: e.target.value })} />
        </div>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <Heart className="h-5 w-5 text-primary" /> Medical Condition (Optional)
          </label>
          <input className={inputClass} placeholder="e.g., Diabetes, Heart condition" value={form.medicalCondition} onChange={(e) => setForm({ ...form, medicalCondition: e.target.value })} />
        </div>
      </div>

      <button
        onClick={handleSave}
        disabled={!canSubmit}
        className="mt-8 w-full rounded-2xl bg-primary py-5 text-elder-xl font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 active:scale-[0.98] disabled:opacity-40 disabled:cursor-not-allowed"
      >
        Save & Continue
      </button>
    </div>
  );
};

export default Onboarding;
