"use client";
import { useShop } from "../../src/context/ShopContext";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function CartPage() {
  const { cart, removeFromCart } = useShop();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li
                  key={`${item.id}-${index}`}
                  className="flex items-center justify-between bg-gray-100 p-4 rounded"
                >
                  <div>
                    <p className="font-semibold">{item.title}</p>
                    <p>${item.price}</p>
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
    </>
  );
}
