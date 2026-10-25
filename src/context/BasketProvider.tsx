import { useState } from "react";
import type { ReactNode } from "react";
import type { Product, BasketProduct } from "../types/Product";
import { BasketContext } from "./BasketContext";

type BasketProviderProps = {
  children: ReactNode;
};

const BasketProvider = ({ children }: BasketProviderProps) => {
  const [products, setProducts] = useState<BasketProduct[]>([]);

  const addProduct = (product: Product, quantity: number) => {
    setProducts((currentProducts) => {
      const existingProduct = currentProducts.find(
        (item) => item.id === product.id,
      );

      if (existingProduct) {
        return currentProducts.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + quantity,
            };
          }

          return item;
        });
      }

      return [...currentProducts, { ...product, quantity }];
    });
  };

  const changeQuantity = (id: number, quantity: number) => {
    setProducts((currentProducts) => {
      return currentProducts.map((product) => {
        if (product.id === id) {
          return { ...product, quantity };
        }

        return product;
      });
    });
  };

  return (
    <BasketContext.Provider value={{ products, addProduct, changeQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
