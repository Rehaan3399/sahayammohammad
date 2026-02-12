import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import sahayamLogo from "@/assets/sahayam-logo.png";

const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => navigate("/onboarding"), 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-8">
      <div className="animate-fade-in-up flex flex-col items-center gap-6">
        <img src={sahayamLogo} alt="Sahayam logo" className="h-28 w-28 animate-breathe" />
        <h1 className="text-elder-4xl font-extrabold tracking-tight text-foreground">
          SAHAYAM
        </h1>
        <p className="text-elder-lg text-muted-foreground font-semibold">
          Help is always nearby
        </p>
      </div>
    </div>
  );
};

export default Splash;
