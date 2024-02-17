import ProductCard from "@/components/shared/ProductCard";
import { commerce } from "@/lib/commerce";
import Link from "next/link";
import React from "react";
import CategoryLayout from "../CategoryLayout";

const Category = async ({ params }: { params: { categoryName: string } }) => {
  console.log(params);
  return (
    <CategoryLayout categoryName={params.categoryName}>
      <h2 className="mb-5 md:mb-8 text-base sm:text-xl">All</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"></div>
    </CategoryLayout>
  );
};

export default Category;
