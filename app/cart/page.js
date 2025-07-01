"use client";
import { useShop } from "../../src/context/ShopContext";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";
import { useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart } = useShop();
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCart = cart.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const total = filteredCart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search in cart..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border p-2 mb-4 w-full"
        />
        {filteredCart.length === 0 ? (
          <p>No items found.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {filteredCart.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-20 h-20 object-cover rounded"
                    />
                    <div>
                      <p className="font-semibold">{item.title}</p>
                      <p>${item.price}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-6 text-right">
              <p className="text-lg font-semibold">
                Total: <span className="text-blue-600">${total}</span>
              </p>
            </div>
          </>
        )}
      </main>
      <Footer />
    </div>
  );
}
