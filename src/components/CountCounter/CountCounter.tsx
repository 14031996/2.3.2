import type { ChangeEvent } from "react";
import Style from "./CountCounter.style.module.scss";

type CountCounterProps = {
  quantity: number;
  onChange: (value: number) => void;
};

const CountCounter = ({ quantity, onChange }: CountCounterProps) => {
  const handleDecrease = () => {
    onChange(quantity - 1);
  };

  const handleIncrease = () => {
    onChange(quantity + 1);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);

    if (value >= 1 && Number.isInteger(value)) {
      onChange(value);
    }
  };

  return (
    <div className={Style["count-counter"]}>
      <button
        type="button"
        onClick={handleDecrease}
        disabled={quantity === 1}
        aria-label="Уменьшить количество"
      >
        −
      </button>

      <input
        type="number"
        min={1}
        step={1}
        value={quantity}
        aria-label="Количество товара"
        onChange={handleChange}
      />

      <button
        type="button"
        onClick={handleIncrease}
        aria-label="Увеличить количество"
      >
        +
      </button>
    </div>
  );
};

export default CountCounter;
