import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import * as SecureStore from "expo-secure-store";

type UserRole = "teacher" | "parent" | null;

interface User {
  role: UserRole;
  token?: string;
  name?: string;
}

interface UserContextType {
  user: User | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Load saved user from storage on app start
  useEffect(() => {
    const loadUser = async () => {
      try {
        const token = await SecureStore.getItemAsync("userToken");
        const role = await SecureStore.getItemAsync("userRole");
        const name = await SecureStore.getItemAsync("userName");

        if (token && role) {
          setUser({
            role: role as UserRole,
            token,
            name: name || undefined,
          });
        }
      } catch (e) {
        console.error("Error loading user:", e);
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  // Save user when setUser is called
  const saveUser = async (newUser: User | null) => {
    if (newUser) {
      if (newUser.token) {
        await SecureStore.setItemAsync("userToken", newUser.token);
      }
      if (newUser.role) {
        await SecureStore.setItemAsync("userRole", newUser.role);
      }
      if (newUser.name) {
        await SecureStore.setItemAsync("userName", newUser.name);
      }
    }
    setUser(newUser);
  };

  const logout = async () => {
    await SecureStore.deleteItemAsync("userToken");
    await SecureStore.deleteItemAsync("userRole");
    await SecureStore.deleteItemAsync("userName");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, setUser: saveUser, logout }}>
      {!loading && children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
