import Hero from "@/components/home/Hero";
import AboutUS from "@/components/home/AboutUS";
import ProductCard from "@/components/shared/ProductCard";
import { Carousel } from "antd";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

interface ITestimonials {
  id: number;
  desc: string;
  author: string;
  title: string;
}

export default function Home() {
  const TESTIMONIALS: ITestimonials[] = [
    {
      id: 1,
      desc: "Blanditiis, ducimus? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ducimus?",
      author: "IFaz",
      title: "Brand Designer",
    },
    {
      id: 2,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ducimus?",
      author: "Temitee",
      title: "Product Designer",
    },
    {
      id: 3,
      desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, ducimus? Lorem ipsum dolor sit amet consectetur,?",
      author: "Miqdad",
      title: "Fitness Instructor",
    },
  ];
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
          dots={false}
          prevArrow={<FaArrowLeftLong />}
          nextArrow={<FaArrowRightLong />}
          autoplay
          className="flex items-center justify-center gap-6 max-w-lg mx-auto [&_.slick-next]:hover:text-gray-500 [&_.slick-arrow]:-mx-5 [&_.slick-arrow]:text-black [&_.slick-prev]:hover:text-gray-500"
        >
          {TESTIMONIALS.map((item) => (
            <div className="text-center" key={item.id}>
              <p>{item.desc}</p>
              <h3 className="font-semibold mt-4 text-base">{item.author}</h3>
              <span className="text-gray-500 text-sm">({item.title})</span>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
}
