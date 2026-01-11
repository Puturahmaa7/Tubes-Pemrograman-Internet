"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
  useCallback,
} from "react";

interface UserData {
  points: number;
  lives: number;
  nextLifeAt?: string;
  maxLives?: number;
  name?: string;
  email?: string;
}

interface UserContextType {
  userData: UserData;
  isLoading: boolean;
  refreshUserData: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: ReactNode }) {
  const [userData, setUserData] = useState<UserData>({
    points: 0,
    lives: 0,
    maxLives: 5,
  });
  const [isLoading, setIsLoading] = useState(true);

  const refreshUserData = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/user/profile");
      if (response.ok) {
        const result = await response.json();
        if (result.success) {
          setUserData({
            points: result.user.points || 0,
            lives: result.user.lives || 0,
            nextLifeAt: result.user.nextLifeAt,
            maxLives: result.user.maxLives || 5,
            name: result.user.name,
            email: result.user.email,
          });
          console.log("User data refreshed:", result.user);
        }
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    refreshUserData();

    const handleUserDataUpdated = () => {
      console.log("UserContext: Received update event");
      refreshUserData();
    };

    window.addEventListener("userDataUpdated", handleUserDataUpdated);

    const interval = setInterval(() => {
      refreshUserData();
    }, 60000);

    return () => {
      clearInterval(interval);
      window.removeEventListener("userDataUpdated", handleUserDataUpdated);
    };
  }, [refreshUserData]);

  return (
    <UserContext.Provider value={{ userData, isLoading, refreshUserData }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
