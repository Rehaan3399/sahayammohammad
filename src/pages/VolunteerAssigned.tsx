import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Phone, MapPin, Clock, Heart } from "lucide-react";

const VolunteerAssigned = () => {
  const navigate = useNavigate();
  const { volunteerName, eta } = useApp();

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      {/* Header */}
      <div className="animate-fade-in-up text-center mb-8">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-stable">
          <Heart className="h-8 w-8 text-stable-foreground" />
        </div>
        <h1 className="text-elder-3xl font-extrabold text-foreground">
          {volunteerName} is on the way
        </h1>
        <div className="mt-3 flex items-center justify-center gap-2">
          <Clock className="h-5 w-5 text-warning" />
          <p className="text-elder-xl font-bold text-warning">ETA: {eta} minutes</p>
        </div>
      </div>

      {/* Map Preview */}
      <div
        className="animate-fade-in-up mb-8 flex h-52 items-center justify-center rounded-2xl bg-calm border-2 border-border overflow-hidden"
        style={{ animationDelay: "0.1s" }}
      >
        <div className="flex flex-col items-center gap-2">
          <MapPin className="h-10 w-10 text-primary" />
          <p className="text-elder-sm font-bold text-muted-foreground">Live location tracking</p>
          <p className="text-elder-sm text-muted-foreground">Map preview area</p>
        </div>
      </div>

      {/* Call Volunteer */}
      <button
        onClick={() => {/* simulate call */}}
        className="animate-fade-in-up mb-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-primary py-5 text-elder-xl font-bold text-primary-foreground shadow-lg transition-all active:scale-[0.98]"
        style={{ animationDelay: "0.2s" }}
      >
        <Phone className="h-6 w-6" />
        Call {volunteerName}
      </button>

      {/* Reassurance */}
      <div
        className="animate-fade-in-up mt-auto rounded-2xl bg-stable/10 border border-stable/30 p-6 text-center"
        style={{ animationDelay: "0.3s" }}
      >
        <p className="text-elder-lg font-bold text-foreground mb-1">Stay calm</p>
        <p className="text-elder-base text-muted-foreground font-semibold">
          Help is on the way. You are not alone.
        </p>
      </div>

      {/* Simulate next screen */}
      <button
        onClick={() => navigate("/help-arrived")}
        className="mt-6 w-full rounded-2xl border-2 border-stable bg-stable/10 py-4 text-elder-lg font-bold text-stable transition-all active:scale-[0.98]"
      >
        Help Has Arrived →
      </button>
    </div>
  );
};

export default VolunteerAssigned;
