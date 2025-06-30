"use client";
import Link from "next/link";
import { useShop } from "../context/ShopContext";
import { useRouter, usePathname } from "next/navigation";

export default function Navbar() {
  const { cart, wishlist, searchQuery, setSearchQuery } = useShop();
  const router = useRouter();
  const pathname = usePathname();

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);

    // If not on home page, redirect to home
    if (pathname !== "/") {
      router.push("/");
    }
  };

  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
      <Link href="/" className="text-xl font-bold">
        ShopIQ
      </Link>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
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
