import { ReactNode } from "react";
import { LivrosProps } from "./produto.interface";

export interface ContextProps {
  children: ReactNode;
}

export interface CartContextProps {
  addItemCart: (produto: LivrosProps) => void;
  removeItemCart: (id: string) => void;
  cartItens: LivrosProps[];
  totalizerCart: () => number;
  cleanCartItems: () => void;
}
