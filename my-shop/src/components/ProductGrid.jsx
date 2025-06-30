"use client";
import products from "../components/data/products";
import ProductCard from "../components/ProductCard";
import { useShop } from "../context/ShopContext";

export default function ProductGrid() {
  const { searchQuery, selectedCategory } = useShop();

  const filtered = products
    .filter((product) =>
      selectedCategory === "All" || product.category === selectedCategory
    )
    .filter((product) =>
      product.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {filtered.length === 0 ? (
        <p className="col-span-full text-gray-500">No products found.</p>
      ) : (
        filtered.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </div>
  );
}
