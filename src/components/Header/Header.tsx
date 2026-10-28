import { useContext } from "react";
import { Button, Popover } from "@mantine/core";
import { IconShoppingCart } from "@tabler/icons-react";
import { BasketContext } from "../../context/BasketContext";
import Cart from "../Cart/Cart";
import Style from "./Header.style.module.scss";

const Header = () => {
  const basket = useContext(BasketContext);

  if (basket === null) {
    return null;
  }

  let totalQuantity = 0;

  for (const product of basket.products) {
    totalQuantity += product.quantity;
  }

  return (
    <header className={Style["header"]}>
      <div className={Style["header-logo"]}>
        <span>Vegetable</span>
        <span className={Style["header-logo-shop"]}>SHOP</span>
      </div>

      <div className={Style["header-cart"]}>
        <Popover
          width={444}
          position="bottom-end"
          offset={12}
          shadow="md"
          radius={16}
        >
          <Popover.Target>
            <Button
              className={Style["header-button"]}
              color="#3b944e"
              radius="md"
              leftSection={
                totalQuantity > 0 ? (
                  <span className={Style["header-quantity"]}>
                    {totalQuantity}
                  </span>
                ) : undefined
              }
              rightSection={<IconShoppingCart size={20} />}
            >
              Cart
            </Button>
          </Popover.Target>

          <Popover.Dropdown>
            <Cart />
          </Popover.Dropdown>
        </Popover>
      </div>
    </header>
  );
};

export default Header;
