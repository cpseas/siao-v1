<<<<<<< HEAD
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { getFullName } from "../helpers/decoding";
=======
import { createContext, useContext, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { useLocalStorage } from './useLocalStorage'
import { getFullName } from '../helpers/decoding'
>>>>>>> d7597f550e96154b63675b0a6bb5d32b35b9a3aa

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
<<<<<<< HEAD
  const [token, setToken] = useLocalStorage("token", null);
  const [user, setUser] = useLocalStorage("user", null);
  const navigate = useNavigate();

  const login = async (token) => {
    setToken(token);
    setUser(getFullName(token));
    navigate("/dashboard", { replace: true });
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    navigate("/", { replace: true });
  };
=======
	const [token, setToken] = useLocalStorage('token', null)
	const [user, setUser] = useLocalStorage('user', null)
	const navigate = useNavigate()

	const login = async token => {
		setToken(token)
		setUser(getFullName(token))
		navigate('/dashboard', { replace: true })
	}

	const logout = () => {
		setToken(null)
		setUser(null)
		navigate('/', { replace: true })
	}
>>>>>>> d7597f550e96154b63675b0a6bb5d32b35b9a3aa

  const value = useMemo(
    () => ({
      token,
      user,
      login,
      logout,
    }),
    [user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};
