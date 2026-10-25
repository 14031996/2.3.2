import { useContext } from "react";
import type { BasketProduct } from "../../types/Product";
import { BasketContext } from "../../context/BasketContext";
import CountCounter from "../CountCounter/CountCounter";
import Style from "./CartItem.style.module.scss";

type CartItemProps = {
  product: BasketProduct;
};

const CartItem = ({ product }: CartItemProps) => {
  const basket = useContext(BasketContext);
  const [name, weight] = product.name.split(" - ");

  if (basket === null) {
    return null;
  }

  const handleChangeQuantity = (quantity: number) => {
    if (basket === null) {
      return;
    }

    basket.changeQuantity(product.id, quantity);
  };

  return (
    <div className={Style["cart-item"]}>
      <img
        className={Style["cart-item-image"]}
        src={product.image}
        alt={name}
      />

      <div className={Style["cart-item-info"]}>
        <div className={Style["cart-item-title"]}>
          <span className={Style["cart-item-name"]}>{name}</span>
          <span className={Style["cart-item-weight"]}>{weight}</span>
        </div>

        <div className={Style["cart-item-bottom"]}>
          <span className={Style["cart-item-price"]}>
            $ {product.price * product.quantity}
          </span>

          <CountCounter
            quantity={product.quantity}
            onChange={handleChangeQuantity}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
