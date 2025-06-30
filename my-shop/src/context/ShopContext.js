"use client";
import { createContext, useContext, useState } from "react";

const ShopContext = createContext();

export function ShopProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  const addToWishlist = (product) => {
    setWishlist((prev) => [...prev, product]);
  };

  return (
    <ShopContext.Provider
      value={{
        cart,
        addToCart,
        wishlist,
        addToWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </ShopContext.Provider>
  );
}

export function useShop() {
  return useContext(ShopContext);
}
