// NavigationContext.js
import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const NavigationContext = createContext();

export const NavigationProvider = ({ children }) => {
  const location = useLocation();
  const [showCandidateTab, setShowCandidateTab] = useState(true);
  const [showCompanyTab, setShowCompanyTab] = useState(true);
  const [jobSeeker, setJobSeeker] = useState(false); // Corrected
  const [hrLogin, setHrLogin] = useState(false); // Corrected

  const toggleHR = (temp) => {
    // setHrLogin(temp);
    setHrLogin(true);
  };

  useEffect(() => {
    // Update tab visibility based on current route
    if (location.pathname === "/login" || location.pathname === "/register") {
      setShowCandidateTab(true);
      setShowCompanyTab(false);
    } else if (
      location.pathname === "/companylogin" ||
      location.pathname === "/companyregister"
    ) {
      setShowCandidateTab(false);
      setShowCompanyTab(true);
    } else {
      setShowCandidateTab(true);
      setShowCompanyTab(true);
    }
  }, [location]);

  return (
    <NavigationContext.Provider
      value={{ showCandidateTab, showCompanyTab, toggleHR, hrLogin, jobSeeker }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => useContext(NavigationContext);
