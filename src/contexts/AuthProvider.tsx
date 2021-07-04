import { createContext, useContext, useEffect, useState } from "react";
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
    signUp: async (data) => {
      try {
        await supabase.auth
          .signUp(data)
          .then((result) => setError(result.error))
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
          .then((result) => setError(result.error))
          .catch((error) => {
            throw new Error("Error" + error);
          });
      } catch (error) {
        throw new Error("Error" + error);
      }
    },
    signOut: async () => await supabase.auth.signOut(),
    user,
    error,
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
