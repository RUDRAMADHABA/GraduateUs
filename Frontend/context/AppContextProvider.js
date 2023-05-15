import React from "react";
import AppContext from "./AppContext";
import { useEffect, useState } from "react";

const AppContextProvider = ({ children }) => {
  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
    else setIsAuthenticated(false);
  }, []);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;