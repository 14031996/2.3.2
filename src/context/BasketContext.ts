import { createContext } from "react";
import type { Product, BasketProduct } from "../types/Product";

type BasketContextType = {
  products: BasketProduct[];
  addProduct: (product: Product, quantity: number) => void;
  changeQuantity: (id: number, quantity: number) => void;
};

export const BasketContext = createContext<BasketContextType | null>(null);
