import { commerce } from "@/lib/commerce";
import Link from "next/link";
import React from "react";

interface ICategoryLayout {
  children: React.ReactNode;
  categoryName: string;
}

const CategoryLayout = async ({ categoryName, children }: ICategoryLayout) => {
  const category = await commerce.categories.retrieve(categoryName, {
    type: "slug",
  });

  return (
    <div className="pt-32 pb-24 max-w-screen-2xl mx-auto px-5">
      <div className="flex flex-col md:flex-row gap-8 relative">
        <div className="md:w-1/4 md:max-w-56 border-b-2 md:border-b-0 md:border-r-2 pr-5 md:h-full md:fixed overflow-x-auto">
          <h2 className="mb-8 uppercase text-xl lg:text-2xl w-fit after:block after:w-1/2 after:animate-pulse after:mx-auto after:mt-1 after:h-[2px] after:bg-black/65">
            {categoryName}
          </h2>
          <div className="flex md:text-base flex-row md:flex-col">
            {/* @ts-ignore */}
            {category?.children.map((subcategory) => (
              <Link
                key={subcategory.id}
                href={`/category/${categoryName}/${subcategory.slug}`}
                className="cursor-pointer hover:bg-black/[0.06] transition duration-300 py-3 px-4 md:px-0 md:hover:px-3"
              >
                {subcategory.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="md:ml-[27%] xl:ml-64">{children}</div>
      </div>
    </div>
  );
};

export default CategoryLayout;
