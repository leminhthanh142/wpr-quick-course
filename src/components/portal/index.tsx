import React from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactNode
}

export const Portal: React.FC<PortalProps> = ({ children }) => {
  const container = document.getElementById("portal") || document.createElement("div");
  return ReactDOM.createPortal(children, container);
};
