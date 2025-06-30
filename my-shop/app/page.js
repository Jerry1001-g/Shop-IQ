"use client";
import { useShop } from "../src/context/ShopContext";
import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import ProductGrid from "../src/components/ProductGrid";
import Footer from "../src/components/Footer";

export default function HomePage() {
  const { selectedCategory, setSelectedCategory } = useShop();

  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto p-4">
        <h2 className="text-xl font-bold mb-4">Filter by Category</h2>
        <div className="flex gap-2 mb-6 flex-wrap">
          {[
            "All",
            "Electronics",
            "Food",
            "Fashion",
            "Home",
            "Books",
            "Sports",
            "Beauty",
          ].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3 py-1 rounded ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
