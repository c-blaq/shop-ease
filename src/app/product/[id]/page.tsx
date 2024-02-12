import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Product = () => {
  return (
    <div className="py-24 px-5 h-screen flex justify-between gap-5 items-center max-w-screen-2xl  mx-auto">
      <div className="flex items-center flex-col gap-5 w-1/4">
        <Image
          src="/jacket.webp"
          alt="Jacket"
          width={150}
          height={150}
          className="object-cover object-top"
        />

        <Image
          src="/jacket.webp"
          alt="Jacket"
          width={150}
          height={150}
          className="object-cover object-top"
        />
      </div>

      <div className="h-full bg-gray-200 flex-1">
        <Image
          src="/jacket.webp"
          alt="Jacket"
          width={1400}
          height={500}
          className="h-full w-full object-cover object-top"
        />
      </div>

      <div className="max-w-md w-1/4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold">Knitted Jacket</h2>
          <span className="text-black/50">$500.00</span>
        </div>
        <p className="py-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi,
          eaque. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Debitis, reiciendis.
        </p>

        <div>
          <button className="bg-black/[0.06] hover:bg-black/[0.1] w-10 h-10 text-center mr-2">
            MD
          </button>
          <button className="bg-black/[0.06] hover:bg-black/[0.1] w-10 h-10 text-center mr-2">
            L
          </button>
          <button className="bg-black/[0.06] hover:bg-black/[0.1] w-10 h-10 text-center mr-2">
            XL
          </button>
        </div>

        <Button
          className="block w-full h-10 text-sm mt-5 md:mt-8 bg-black/80 text-white transition duration-300"
          type="text"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Product;
