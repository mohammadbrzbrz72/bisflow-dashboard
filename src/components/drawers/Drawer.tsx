import type { ReactNode } from "react";
import CDrawer from "react-modern-drawer";

interface IDrawer {
  isOpen: boolean;
  toggleDrawer: (data?: boolean) => void;
  children: ReactNode;
}

export function Drawer({ isOpen, toggleDrawer, children }: IDrawer) {
  return (
    <CDrawer
      open={isOpen}
      onClose={toggleDrawer}
      direction="right"
      className="bla bla bla"
    >
      {children}
    </CDrawer>
  );
}
