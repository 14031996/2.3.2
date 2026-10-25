import { it, expect, vi } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import CountCounter from "./CountCounter";

it("should increase the quantity", () => {
  const onChange = vi.fn();

  render(<CountCounter quantity={1} onChange={onChange} />);

  fireEvent.click(screen.getByLabelText("Увеличить количество"));

  expect(onChange).toHaveBeenCalledWith(2);
});
