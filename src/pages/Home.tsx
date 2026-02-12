import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Phone, ShieldCheck, Activity } from "lucide-react";

const Home = () => {
  const navigate = useNavigate();
  const { profile } = useApp();

  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good Morning";
    if (hour < 17) return "Good Afternoon";
    return "Good Evening";
  };

  const displayName = profile.name || "Friend";

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      {/* Greeting */}
      <div className="animate-fade-in-up mb-6">
        <p className="text-elder-lg text-muted-foreground font-semibold">{getGreeting()},</p>
        <h1 className="text-elder-3xl font-extrabold text-foreground">{displayName}</h1>
      </div>

      {/* Status Card */}
      <div className="animate-fade-in-up mb-10 rounded-2xl bg-stable/10 border-2 border-stable/30 p-6 flex items-center gap-4" style={{ animationDelay: "0.1s" }}>
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-stable">
          <ShieldCheck className="h-7 w-7 text-stable-foreground" />
        </div>
        <div>
          <p className="text-elder-xl font-bold text-foreground">You are Stable</p>
          <p className="text-elder-sm text-muted-foreground">Everything looks good</p>
        </div>
      </div>

      {/* Emergency Button */}
      <div className="flex flex-1 flex-col items-center justify-center gap-6" style={{ animationDelay: "0.2s" }}>
        <button
          onClick={() => navigate("/emergency")}
          className="animate-pulse-emergency flex h-48 w-48 flex-col items-center justify-center rounded-full bg-emergency shadow-2xl transition-transform active:scale-95"
        >
          <span className="text-elder-2xl font-extrabold text-emergency-foreground leading-tight text-center">
            Get Help<br />Now
          </span>
        </button>
        <p className="text-elder-sm text-muted-foreground font-semibold">Tap for emergency help</p>
      </div>

      {/* Bottom Actions */}
      <div className="mt-auto flex flex-col gap-4 pt-8">
        <button
          onClick={() => {
            if (profile.emergencyContact) {
              window.location.href = `tel:${profile.emergencyContact}`;
            }
          }}
          className="flex w-full items-center justify-center gap-3 rounded-2xl border-2 border-border bg-card py-4 text-elder-lg font-bold text-foreground shadow-sm transition-all hover:bg-muted active:scale-[0.98]"
        >
          <Phone className="h-6 w-6 text-primary" />
          Call Family
        </button>

        {profile.medicalCondition && (
          <div className="flex items-center gap-3 rounded-2xl bg-calm p-4">
            <Activity className="h-5 w-5 text-muted-foreground" />
            <p className="text-elder-sm text-calm-foreground font-semibold">
              Condition: {profile.medicalCondition}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
