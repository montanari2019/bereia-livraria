import { createContext, useState } from "react";
import { CartContextProps, ContextProps } from "./interface/@types";
import { LivrosProps } from "./interface/produto.interface";

export const CartContext = createContext({} as CartContextProps);

export default function CartContextComponent({ children }: ContextProps) {
  const [cartItens, setCartItens] = useState<LivrosProps[]>([]);

  function addItemCart(produto: LivrosProps) {
    const verifyItem = cartItens.find((item) => item.id === produto.id);

    if (verifyItem) {
      console.log("item ja está adicionado ao carinho");
      return;
    }

    setCartItens((prevState) => [...prevState, produto]);
  }

  function removeItemCart(id: string) {
    setCartItens((prevItens) => prevItens.filter((item) => item.id !== id));
  }

  function totalizerCart(): number {
    return cartItens.reduce((acumulador, item) => {
      const totalizer = acumulador + item.preco;
      return totalizer;
    }, 0);
  }

  return (
    <CartContext.Provider
      value={{ removeItemCart, addItemCart, cartItens, totalizerCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
