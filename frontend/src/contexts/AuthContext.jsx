import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(
            "https://countrydetails.onrender.com/api/auth/me",
            {
              headers: { "x-auth-token": token },
            }
          );
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user", error);
        }
      };
      fetchUser();
    }
  }, []);

  const login = async (username, password) => {
    const response = await axios.post(
      "https://countrydetails.onrender.com/api/auth/login",
      {
        username,
        password,
      }
    );
    // console.log(response);
    localStorage.setItem("token", response.data.token);
    setUser({ username });
  };

  const register = async (username, password) => {
    await axios.post("https://countrydetails.onrender.com/api/auth/register", {
      username,
      password,
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, register, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
