import Hero from "@/components/home/Hero";
import AboutUS from "@/components/home/AboutUS";
import ProductCard from "@/components/shared/ProductCard";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <AboutUS />
        <section>
          <h2 className="mb-8 mx-auto text-2xl w-fit after:block after:w-1/2 after:animate-pulse after:mx-auto after:mt-1 after:h-[2px] after:bg-black/65">
            Featured Products
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </section>
      </div>
    </>
  );
}
