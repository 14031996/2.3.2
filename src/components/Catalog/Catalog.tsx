import { useEffect, useState } from "react";
import { Loader } from "@mantine/core";
import type { Product } from "../../types/Product";
import ProductCard from "../ProductCard/ProductCard";
import Style from "./Catalog.style.module.scss";

const Catalog = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const response = await fetch(
          "https://res.cloudinary.com/sivadass/raw/upload/v1535817394/json/products.json",
        );

        if (!response.ok) {
          throw new Error("Не удалось загрузить товары");
        }

        const data: Product[] = await response.json();

        setProducts(data);
      } catch {
        setError("Не удалось загрузить товары. Обновите страницу.");
      } finally {
        setLoading(false);
      }
    };

    loadProducts();
  }, []);

  let content;

  if (loading) {
    content = <Loader color="#54b46a" />;
  } else if (error) {
    content = <p>{error}</p>;
  } else if (products.length === 0) {
    content = <p>Товары не найдены</p>;
  } else {
    content = (
      <div className={Style["products"]}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    );
  }

  return (
    <main className={Style["catalog"]}>
      <h1>Catalog</h1>
      {content}
    </main>
  );
};

export default Catalog;
