import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "@/contexts/AppContext";
import { Star, ShieldCheck } from "lucide-react";

const EmergencyCompleted = () => {
  const navigate = useNavigate();
  const { volunteerName } = useApp();
  const [rating, setRating] = useState(0);

  return (
    <div className="flex min-h-screen flex-col bg-background px-6 py-10">
      {/* Header */}
      <div className="animate-fade-in-up text-center mb-8">
        <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-stable">
          <ShieldCheck className="h-10 w-10 text-stable-foreground" />
        </div>
        <h1 className="text-elder-3xl font-extrabold text-foreground">You are Safe</h1>
        <p className="mt-2 text-elder-base text-muted-foreground font-semibold">
          The emergency has been resolved
        </p>
      </div>

      {/* Summary */}
      <div
        className="animate-fade-in-up mb-8 rounded-2xl bg-card border-2 border-border p-6 shadow-sm"
        style={{ animationDelay: "0.1s" }}
      >
        <h2 className="text-elder-lg font-bold text-foreground mb-4">Response Summary</h2>
        <div className="flex flex-col gap-3">
          <div className="flex justify-between">
            <span className="text-elder-sm text-muted-foreground font-semibold">Volunteer</span>
            <span className="text-elder-sm font-bold text-foreground">{volunteerName}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-elder-sm text-muted-foreground font-semibold">Response Time</span>
            <span className="text-elder-sm font-bold text-foreground">4 minutes</span>
          </div>
          <div className="flex justify-between">
            <span className="text-elder-sm text-muted-foreground font-semibold">Status</span>
            <span className="text-elder-sm font-bold text-stable">Resolved</span>
          </div>
        </div>
      </div>

      {/* Rating */}
      <div
        className="animate-fade-in-up mb-8 text-center"
        style={{ animationDelay: "0.2s" }}
      >
        <p className="text-elder-lg font-bold text-foreground mb-4">Rate {volunteerName}</p>
        <div className="flex justify-center gap-3">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              onClick={() => setRating(star)}
              className="transition-transform active:scale-90"
            >
              <Star
                className={`h-12 w-12 transition-colors ${
                  star <= rating
                    ? "fill-warning text-warning"
                    : "fill-none text-border"
                }`}
              />
            </button>
          ))}
        </div>
      </div>

      {/* Return Home */}
      <button
        onClick={() => navigate("/home")}
        className="mt-auto w-full rounded-2xl bg-primary py-5 text-elder-xl font-bold text-primary-foreground shadow-lg transition-all active:scale-[0.98]"
      >
        Return Home
      </button>
    </div>
  );
};

export default EmergencyCompleted;
