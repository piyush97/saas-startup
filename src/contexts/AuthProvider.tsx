import { navigate } from "@reach/router";
import { User } from "@supabase/supabase-js";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

type AuthContextProps = {
  signUp: (data: {
    email: string;
    password: string;
    name?: string;
  }) => Promise<void>;
  signIn: (data: { email: string; password: string }) => Promise<void>;
  signOut: () => Promise<
    | {
        error: Error;
      }
    | unknown
  >;
  getUserDetails: () => Promise<User>;
  user: User;
  error: Error;
  isAuth: boolean;
};

const AuthContext = createContext<AuthContextProps>(null);
type AuthProviderProps = {
  children: JSX.Element[] | JSX.Element;
};
/**
 * Auth Provider
 *
 * @param {*} { children }
 */
export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);
  const [error, setError] = useState(null);
  const [isAuth, setIsAuth] = useState(() => {
    const value = localStorage.getItem("isAuth");
    return value !== null ? JSON.parse(value) : false;
  });

  useEffect(() => {
    const session = supabase.auth.session();
    setUser((session && session?.user) ?? null);
    setloading(false);

    const { data: listener } = supabase.auth.onAuthStateChange(
      (event, session) => {
        setUser((session && session?.user) ?? null);
        setloading(false);
      }
    );

    // Cleanup for useEffect
    return () => {
      listener.unsubscribe();
    };
  }, []);

  const onLogin = () => {
    setIsAuth(true);
    localStorage.setItem("isAuth", "true");
    navigate("/dashboard");
  };

  const onLogout = () => {
    localStorage.setItem("isAuth", "false");
    setIsAuth(false);
    navigate("/login");
  };

  const value = {
    signUp: async (data) => {
      try {
        await supabase.auth
          .signUp(data)
          .then((result) => {
            setError(result.error);
          })
          .catch((error) => {
            setError(error);
            throw new Error("Error" + String(error));
          });
      } catch (error) {
        setError(error);
        throw new Error("Error" + String(error));
      }
    },
    signIn: async (data) => {
      try {
        await supabase.auth
          .signIn(data)
          .then((result) => {
            result && result.error ? setError(result.error) : onLogin();
          })
          .catch((error) => {
            setError(error);
            throw new Error("Error" + String(error));
          });
      } catch (error) {
        setError(error);
        throw new Error("Error" + String(error));
      }
    },
    signOut: async () =>
      await supabase.auth
        .signOut()
        .then(() => onLogout())
        .catch((error) => setError(error)),
    getUserDetails: async () => await supabase.auth.user(),
    user,
    error,
    isAuth,
  };
  // Provider to passdown values

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
export const useAuth = (): AuthContextProps => {
  return useContext<AuthContextProps>(AuthContext);
};
