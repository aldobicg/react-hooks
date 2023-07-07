import React, { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState();
  const onLogin = () => {
    setUser({
      id: 123,
      name: "Aldo Hernandez",
      mail: "aldohmolina@gmail.com",
    });
  };
  return (
    <UserContext.Provider value={{ user, onLogin }}>
      {children}
    </UserContext.Provider>
  );
};
