import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const COUNTDOWN_SECONDS = 10;
const CIRCLE_CIRCUMFERENCE = 628; // 2 * PI * 100

const EmergencyConfirmation = () => {
  const navigate = useNavigate();
  const [seconds, setSeconds] = useState(COUNTDOWN_SECONDS);

  useEffect(() => {
    if (seconds <= 0) {
      navigate("/volunteer-assigned");
      return;
    }
    const timer = setTimeout(() => setSeconds((s) => s - 1), 1000);
    return () => clearTimeout(timer);
  }, [seconds, navigate]);

  const progress = ((COUNTDOWN_SECONDS - seconds) / COUNTDOWN_SECONDS) * CIRCLE_CIRCUMFERENCE;

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-emergency/5 px-6">
      {/* Countdown Circle */}
      <div className="relative mb-10 flex h-64 w-64 items-center justify-center">
        <svg className="absolute h-full w-full -rotate-90" viewBox="0 0 220 220">
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="8"
          />
          <circle
            cx="110"
            cy="110"
            r="100"
            fill="none"
            stroke="hsl(var(--emergency))"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray={CIRCLE_CIRCUMFERENCE}
            strokeDashoffset={CIRCLE_CIRCUMFERENCE - progress}
            className="transition-all duration-1000 ease-linear"
          />
        </svg>
        <span className="text-elder-4xl font-extrabold text-emergency">{seconds}</span>
      </div>

      <h1 className="animate-fade-in-up text-elder-2xl font-extrabold text-foreground text-center mb-3">
        Calling Emergency Support
      </h1>
      <p className="text-elder-base text-muted-foreground text-center mb-12 font-semibold">
        Help will be dispatched automatically
      </p>

      {/* Buttons */}
      <div className="flex w-full flex-col gap-4">
        <button
          onClick={() => navigate("/volunteer-assigned")}
          className="w-full rounded-2xl bg-emergency py-5 text-elder-xl font-bold text-emergency-foreground shadow-lg transition-all active:scale-[0.98]"
        >
          Call Now
        </button>
        <button
          onClick={() => navigate("/home")}
          className="w-full rounded-2xl border-2 border-border bg-card py-5 text-elder-xl font-bold text-foreground transition-all active:scale-[0.98]"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default EmergencyConfirmation;
