import { createContext, useEffect, useState } from "react";
import { CartContextProps, ContextProps } from "./interface/@types";
import { LivrosProps } from "./interface/produto.interface";
import {
  GetCartStorage,
  GetCartStorageJsonStrign,
  SaveCartItensStorage,
} from "./storage/storage.cart";

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

  async function GetStorageItens() {
    const cartStorage = await GetCartStorage();

    setCartItens(cartStorage);
  }

  async function handleShoppingCartChanges() {
    const itemsStorageJson = await GetCartStorageJsonStrign();
    const stateLocalJson = JSON.stringify(cartItens);

    if (stateLocalJson === itemsStorageJson) {
      return;
    }

    await SaveCartItensStorage(cartItens);
  }

  async function cleanCartItems() {
    setCartItens([]);
  }

  useEffect(() => {
    handleShoppingCartChanges();
  }, [cartItens]);

  useEffect(() => {
    GetStorageItens();
  }, []);

  return (
    <CartContext.Provider
      value={{
        removeItemCart,
        addItemCart,
        cartItens,
        totalizerCart,
        cleanCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
