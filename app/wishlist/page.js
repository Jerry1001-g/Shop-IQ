"use client";
import { useShop } from "../../src/context/ShopContext";
import Navbar from "../../src/components/Navbar";
import Footer from "../../src/components/Footer";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useShop();

  const total = wishlist.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1 container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p>Your wishlist is empty.</p>
        ) : (
          <>
            <ul className="space-y-4">
              {wishlist.map((item, index) => (
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
                    onClick={() => removeFromWishlist(item.id)}
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
