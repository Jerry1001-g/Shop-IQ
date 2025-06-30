import Navbar from "../src/components/Navbar";
import Hero from "../src/components/Hero";
import ProductGrid from "../src/components/ProductGrid";
import Footer from "../src/components/Footer";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <main className="container mx-auto p-4">
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}
