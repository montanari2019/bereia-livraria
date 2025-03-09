import { useContext } from "react";
import { CartContext } from "./CartContextComponent";

export default function useCartContext() {
  const context = useContext(CartContext);
  return context;
}
