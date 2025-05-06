"use client";
import { createContext, useContext, useState, ReactNode } from "react";

interface About {
  id: string;
  title: string;
  description: string;
}
interface Service {
  id: string;
  name: string;
  details: string;
}
interface Gallery {
  id: string;
  imageUrl: string;
  caption: string;
}
interface Team {
  id: string;
  name: string;
  role: string;
}
interface Contact {
  email: string;
  phone: string;
  address: string;
}

interface AppContextType {
  loading: boolean;
  setLoading: (value: boolean) => void;
  progress: number;
  setProgress: (value: number) => void;
  abouts: About[];
  setAbouts: (abouts: About[]) => void;
  services: Service[];
  setServices: (services: Service[]) => void;
  galleries: Gallery[];
  setGalleries: (galleries: Gallery[]) => void;
  teams: Team[];
  setTeams: (teams: Team[]) => void;
  contact: Contact | null;
  setContact: (contact: Contact) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used inside AppProvider");
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [loading, setLoading] = useState<boolean>(true); // Start as true, loader will manage
  const [progress, setProgress] = useState<number>(0);
  const [abouts, setAbouts] = useState<About[]>([]);
  const [services, setServices] = useState<Service[]>([]);
  const [galleries, setGalleries] = useState<Gallery[]>([]);
  const [teams, setTeams] = useState<Team[]>([]);
  const [contact, setContact] = useState<Contact | null>(null);

  return (
    <AppContext.Provider
      value={{
        loading,
        setLoading,
        progress,
        setProgress,
        abouts,
        setAbouts,
        services,
        setServices,
        galleries,
        setGalleries,
        teams,
        setTeams,
        contact,
        setContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
