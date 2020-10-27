import React, { useState } from "react";

export const AppContext = React.createContext();

export default function AppProvider({ children }) {
  const [torta, setTorta] = useState({
    colorTorta: "#31230b",
    colorRelleno: "#553c13",
    show: "on"
  });
  const [vela, setVela] = useState({ color: "#ad030f", show: "on" });
  const [plato, setPlato] = useState({ color: "#ccc", show: "on" });
  const [nevado, setNevado] = useState({ color: "#f0e4d0", show: "on" });

  return (
    <AppContext.Provider
      value={{
        torta,
        setTorta,
        vela,
        setVela,
        plato,
        setPlato,
        nevado,
        setNevado
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
