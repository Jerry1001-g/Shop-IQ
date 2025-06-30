"use client";
import { useShop } from "../../src/context/ShopContext";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function WishlistPage() {
  const { wishlist } = useShop();

  return (
    <>
      <Navbar />
      <main className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <ul className="space-y-2">
            {wishlist.map((item, index) => (
              <li
                key={index}
                className="bg-white p-2 rounded shadow flex justify-between"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
              </li>
            ))}
          </ul>
        )}
      </main>
      <Footer />
    </>
  );
}
