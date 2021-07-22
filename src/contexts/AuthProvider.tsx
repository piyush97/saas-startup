import { navigate } from "@reach/router";
import React, { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext(null);
/**
 * Auth Provider
 *
 * @param {*} { children }
 */
export const AuthProvider = ({ children }) => {
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
            throw new Error("Error" + error);
          });
      } catch (error) {
        throw new Error("Error" + error);
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
            throw new Error("Error" + error);
          });
      } catch (error) {
        throw new Error("Error" + error);
      }
    },
    signOut: async () => await supabase.auth.signOut().then(() => onLogout()),
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
export const useAuth: () => null = () => {
  return useContext(AuthContext);
};
