import ProductCard from "@/components/shared/ProductCard";
import React from "react";

const Category = ({ params }: { params: { categoryName: string } }) => {
  return (
    <div className="pt-32 pb-24 max-w-screen-2xl mx-auto">
      <div className="flex gap-8 relative">
        <div className="min-w-56 border-r-2 pr-5 h-full fixed">
          <h2 className="mb-8 uppercase text-2xl w-fit after:block after:w-1/2 after:animate-pulse after:mx-auto after:mt-1 after:h-[2px] after:bg-black/65">
            {params.categoryName}
          </h2>
          <div className="flex flex-col text-base">
            <span className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 hover:px-3">
              All
            </span>
            <span className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 hover:px-3">
              Shirts
            </span>
            <span className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 hover:px-3">
              Jeans
            </span>
            <span className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 hover:px-3">
              Pants
            </span>
            <span className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 hover:px-3">
              jacket
            </span>
          </div>
        </div>

        <div className="ml-64">
          <h2 className="mb-8 text-xl">All</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
