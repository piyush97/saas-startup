import { createContext, useContext, useEffect, useState } from "react";
import { supabase } from "../supabaseClient";

const AuthContext = createContext(null);
/**
 *Auth Provider
 *
 * @param {*} { children }
 */
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setloading] = useState(true);

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

  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signOut: () => supabase.auth.signOut(),
    user,
  };
  // Provider to passdown values

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
