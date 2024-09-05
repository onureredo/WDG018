/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Erstelle diese Context-Variable. Sie enthält am Ende all die Werte und Funktionen, die wir durch den Context zugänglich machen wollen.
// Das "Lager"
export const AuthContext = createContext();

// Diese Funktionale Komponente nimmt alle Werte, States und Funktionen auf.
// Wir *müssen* children aus den props entgegenehmen. Das ist ein benanntes Feld im Props-Object und heißt immer genau so.
const AuthContextProvider = ({ children }) => {
  const test = 42;
  const [user, setUser] = useState(null);

  // Für die logout-Funktion
  const navigate = useNavigate();

  // Entfernt Token und User und leitet den Besucher der Webseite zur Login-Seite zurück
  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    navigate('/');
  };

  // Verbindung zwischen "Lager" und den children-Elementen
  return <AuthContext.Provider value={{ test, user, setUser, logout }}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
