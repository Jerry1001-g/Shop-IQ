"use client";
import Link from "next/link";
import { useShop } from "../context/ShopContext";

export default function Navbar() {
  const { cart, wishlist, searchQuery, setSearchQuery } = useShop();

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <Link href="/" className="text-xl font-bold">
        ShopIQ
      </Link>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="text-white bg-gray-700 px-7 py-2 rounded focus:outline-none focus:ring-2 focus:ring-white"
      />
      <div className="space-x-4">
        <Link href="/">Home</Link>
        <Link href="/cart">Cart ({cart.length})</Link>
        <Link href="/wishlist">Wishlist ({wishlist.length})</Link>
      </div>
    </nav>
  );
}
