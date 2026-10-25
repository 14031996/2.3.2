import { useContext, useState } from "react";
import { Button } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import type { Product } from "../../types/Product";
import { BasketContext } from "../../context/BasketContext";
import CountCounter from "../CountCounter/CountCounter";
import Style from "./ProductCard.style.module.scss";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const [quantity, setQuantity] = useState(1);
  const basket = useContext(BasketContext);
  const [name, weight] = product.name.split(" - ");

  if (basket === null) {
    return null;
  }

  const handleAddToCart = () => {
    if (basket === null) {
      return;
    }

    basket.addProduct(product, quantity);
  };

  return (
    <article className={Style["product-card"]}>
      <img
        className={Style["product-image"]}
        src={product.image}
        alt={product.name}
      />

      <div className={Style["product-info"]}>
        <div className={Style["product-title"]}>
          <h2 className={Style["product-name"]}>{name}</h2>

          {weight && <span className={Style["product-weight"]}>{weight}</span>}
        </div>

        <CountCounter quantity={quantity} onChange={setQuantity} />
      </div>

      <div className={Style["product-bottom"]}>
        <span className={Style["product-price"]}>$ {product.price}</span>

        <Button
          color="#3b944e"
          variant="light"
          radius="md"
          rightSection={<IconShoppingCart size={20} />}
          onClick={handleAddToCart}
        >
          Add to cart
        </Button>
      </div>
    </article>
  );
};

export default ProductCard;
