"use client";
import Link from "next/link";
import { useShop } from "../context/ShopContext";

export default function ProductCard({ product }) {
  const { addToCart, addToWishlist } = useShop();

  return (
    <div className="bg-white p-4 rounded shadow flex flex-col">
      <Link href={`/product/${product.id}`}>
        <img src={product.image} alt={product.title} className="mb-4" />
        <h2 className="text-lg font-semibold">{product.title}</h2>
      </Link>
      <p className="text-gray-600">{product.description}</p>
      <p className="font-bold mt-2">${product.price}</p>
      <div className="mt-4 flex space-x-2">
        <button
          onClick={() => addToCart(product)}
          className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
        >
          Add to Cart
        </button>
        <button
          onClick={() => addToWishlist(product)}
          className="bg-pink-500 text-white px-3 py-1 rounded hover:bg-pink-600"
        >
          Wishlist
        </button>
      </div>
    </div>
  );
}
