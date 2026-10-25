import { useContext } from "react";
import { BasketContext } from "../../context/BasketContext";
import CartItem from "../CartItem/CartItem";
import cartEmptyImage from "../../assets/cart-empty.svg";
import Style from "./Cart.style.module.scss";

const Cart = () => {
  const basket = useContext(BasketContext);

  if (basket === null) {
    return null;
  }

  if (basket.products.length === 0) {
    return (
      <div className={Style["cart-empty"]}>
        <img
          className={Style["cart-empty-image"]}
          src={cartEmptyImage}
          alt=""
        />

        <p className={Style["cart-empty-text"]}>Your cart is empty!</p>
      </div>
    );
  }

  let totalPrice = 0;

  for (const product of basket.products) {
    totalPrice += product.price * product.quantity;
  }

  return (
    <div className={Style["cart"]}>
      {basket.products.map((product) => (
        <CartItem key={product.id} product={product} />
      ))}

      <div className={Style["cart-total"]}>
        <span>Total</span>
        <span>$ {totalPrice}</span>
      </div>
    </div>
  );
};

export default Cart;
