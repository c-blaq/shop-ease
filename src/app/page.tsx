import Hero from "@/components/home/Hero";
import AboutUS from "@/components/home/AboutUS";
import ProductCard from "@/components/shared/ProductCard";
import { Carousel } from "antd";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <>
      <Hero />

      <div className="max-w-screen-xl mx-auto px-5 py-10">
        <AboutUS />

        <section className="py-10 md:py-20">
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

        <Carousel
          arrows={true}
          prevArrow={<FaArrowLeftLong />}
          nextArrow={<FaArrowRightLong />}
          autoplay
          className="bg-white min-h-[200px] gap-6 max-w-lg mx-auto [&_.slick-next]:hover:text-gray-500 [&_.slick-arrow]:-mx-5 [&_.slick-arrow]:text-black [&_.slick-prev]:hover:text-gray-500"
        >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
        </Carousel>
      </div>
    </>
  );
}
