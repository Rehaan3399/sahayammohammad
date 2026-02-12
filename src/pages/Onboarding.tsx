import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { User, Phone, Heart } from "lucide-react";

const Onboarding = () => {
  const navigate = useNavigate();
  const { setProfile } = useApp();
  const [form, setForm] = useState({ name: "", age: "", emergencyContact: "", medicalCondition: "" });

  const canSubmit = form.name.trim() && form.age.trim() && form.emergencyContact.trim();

  const handleSave = () => {
    if (!canSubmit) return;
    setProfile(form);
    navigate("/home");
  };

  const inputClass =
    "w-full rounded-2xl border-2 border-border bg-card px-5 py-4 text-elder-lg font-semibold text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all";

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      <div className="animate-fade-in-up flex flex-col gap-3 mb-8">
        <h1 className="text-elder-3xl font-extrabold text-foreground">Welcome!</h1>
        <p className="text-elder-base text-muted-foreground">Tell us about yourself so we can help you better.</p>
      </div>

      <div className="flex flex-col gap-5 flex-1" style={{ animationDelay: "0.1s" }}>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <User className="h-5 w-5 text-primary" /> Your Name
          </label>
          <input
            className={inputClass}
            placeholder="Enter your name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <User className="h-5 w-5 text-primary" /> Your Age
          </label>
          <input
            className={inputClass}
            placeholder="Enter your age"
            type="number"
            value={form.age}
            onChange={(e) => setForm({ ...form, age: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <Phone className="h-5 w-5 text-primary" /> Emergency Contact Number
          </label>
          <input
            className={inputClass}
            placeholder="Phone number"
            type="tel"
            value={form.emergencyContact}
            onChange={(e) => setForm({ ...form, emergencyContact: e.target.value })}
          />
        </div>

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 text-elder-sm font-bold text-foreground">
            <Heart className="h-5 w-5 text-primary" /> Medical Condition (Optional)
          </label>
          <input
            className={inputClass}
            placeholder="e.g., Diabetes, Heart condition"
            value={form.medicalCondition}
            onChange={(e) => setForm({ ...form, medicalCondition: e.target.value })}
          />
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
