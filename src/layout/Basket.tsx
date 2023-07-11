import { useState, useCallback } from "react";
import { BsBasket3 } from "react-icons/bs";

import { BasketDrawer } from "@/components";

export default function Basket() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = useCallback((data?: boolean) => {
    setIsOpen((prevState) => data ?? !prevState);
  }, []);

  return (
    <>
      <BsBasket3 size={35} onClick={toggleDrawer} className="cursor-pointer" />
      {isOpen && <BasketDrawer isOpen={isOpen} toggleDrawer={toggleDrawer} />}
    </>
  );
}
