import React from "react";
import CategoryLayout from "../../CategoryLayout";

const SubCategory = ({
  params,
}: {
  params: { categoryName: string; subCategory: string };
}) => {
  return (
    <CategoryLayout categoryName={params.categoryName}>
      <h2 className="mb-5 md:mb-8 text-base sm:text-xl capitalize">
        {params.subCategory}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5"></div>
    </CategoryLayout>
  );
};

export default SubCategory;
