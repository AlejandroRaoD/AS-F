"use client"
import React, { ReactNode, useState } from "react";
import NavBar, { NavBarProps } from "./NavBar";
import { Toaster } from "react-hot-toast";
import LeftPanel from "./LeftPanel";

interface props {
  children?: ReactNode;
  navBarProps: NavBarProps;
}

const PageTemplate = (props: props) => {
  const { children, navBarProps } = props;
  const [isPanelCollapsed, setIsPanelCollapsed] = useState(false); // Estado para saber si el panel está colapsado

  // Función para manejar el colapso del panel
  const togglePanel = () => {
    setIsPanelCollapsed(!isPanelCollapsed);
  };

  return (
    <>
      <div className="h-screen grid grid-rows-[4rem_1fr] transition-all duration-300" style={{ marginLeft: isPanelCollapsed ? "3.5rem" : "13rem" }}>
        {/* Pasa la función togglePanel como prop a LeftPanel */}
        <NavBar {...navBarProps} />

        <div className="overflow-y-auto p-4">{children}</div>

        <Toaster />
      </div>

      {/* Pasa el estado isPanelCollapsed y la función togglePanel a LeftPanel */}
      <LeftPanel isPanelCollapsed={isPanelCollapsed} togglePanel={togglePanel} />
    </>
  );
};

export default PageTemplate;
