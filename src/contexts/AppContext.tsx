import React, { createContext, useContext, useState, ReactNode } from "react";

interface UserProfile {
  name: string;
  age: string;
  emergencyContact: string;
  medicalCondition: string;
}

interface AppState {
  profile: UserProfile;
  setProfile: (p: UserProfile) => void;
  volunteerName: string;
  eta: number;
}

const AppContext = createContext<AppState | null>(null);

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [profile, setProfile] = useState<UserProfile>({
    name: "",
    age: "",
    emergencyContact: "",
    medicalCondition: "",
  });

  return (
    <AppContext.Provider value={{ profile, setProfile, volunteerName: "Ramesh", eta: 4 }}>
      {children}
    </AppContext.Provider>
  );
};
