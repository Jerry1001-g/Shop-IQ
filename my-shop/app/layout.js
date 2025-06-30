import "./globals.css";
import { ShopProvider } from "../src/context/ShopContext";

export const metadata = {
  title: "ShopIQ",
  description: "Your Next.js Ecommerce Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ShopProvider>{children}</ShopProvider>
      </body>
    </html>
  );
}
