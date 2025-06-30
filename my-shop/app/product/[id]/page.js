"use client";
import { useParams } from "next/navigation";
import products from "../../../src/components/data/products";
import Navbar from "../../../src/components/Navbar";
import Footer from "../../../src/components/Footer";
import { useShop } from "../../../src/context/ShopContext";

export default function ProductDetails() {
  const { id } = useParams();
  const { addToCart, addToWishlist } = useShop();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <>
        <Navbar />
        <main className="container mx-auto p-4">
          <h1 className="text-2xl font-bold">Product Not Found</h1>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <img src={product.image} alt={product.title} className="w-64 mb-4" />
        <h1 className="text-2xl font-bold">{product.title}</h1>
        <p className="mt-2">{product.description}</p>
        <p className="font-bold mt-2">${product.price}</p>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => addToCart(product)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Add to Cart
          </button>
          <button
            onClick={() => addToWishlist(product)}
            className="bg-pink-500 text-white px-4 py-2 rounded"
          >
            Add to Wishlist
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}
