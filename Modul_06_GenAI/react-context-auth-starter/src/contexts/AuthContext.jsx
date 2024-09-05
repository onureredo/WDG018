/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const test = 42;
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  return <AuthContext.Provider value={{ test, user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
