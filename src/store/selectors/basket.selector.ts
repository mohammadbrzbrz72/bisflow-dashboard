import { useAppSelector } from "../hooks";

export function basketSelector() {
  const basket = useAppSelector((state) => state.basket);

  return basket;
}
