import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/contexts/AppContext";
import Splash from "./pages/Splash";
import Onboarding from "./pages/Onboarding";
import Home from "./pages/Home";
import EmergencyConfirmation from "./pages/EmergencyConfirmation";
import VolunteerAssigned from "./pages/VolunteerAssigned";
import HelpArrived from "./pages/HelpArrived";
import EmergencyCompleted from "./pages/EmergencyCompleted";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AppProvider>
        <BrowserRouter>
          <div className="mx-auto max-w-md min-h-screen">
            <Routes>
              <Route path="/" element={<Splash />} />
              <Route path="/onboarding" element={<Onboarding />} />
              <Route path="/home" element={<Home />} />
              <Route path="/emergency" element={<EmergencyConfirmation />} />
              <Route path="/volunteer-assigned" element={<VolunteerAssigned />} />
              <Route path="/help-arrived" element={<HelpArrived />} />
              <Route path="/completed" element={<EmergencyCompleted />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </BrowserRouter>
      </AppProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
