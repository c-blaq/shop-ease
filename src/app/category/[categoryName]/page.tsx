import React from "react";

const Category = ({ params }: { params: { categoryName: string } }) => {
  return (
    <div className="pt-20">
      <h2 className="uppercase text-2xl">{params.categoryName}</h2>
    </div>
  );
};

export default Category;
