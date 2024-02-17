import { commerce } from "@/lib/commerce";
import { Button } from "antd";
import Image from "next/image";
import React from "react";

const Product = async ({ params }: { params: { slug: string } }) => {
  const product = await commerce.products.retrieve(params?.slug, {
    type: "permalink",
  });

  return (
    <div className="py-24 px-5 flex flex-col lg:flex-row justify-between gap-5 items-center max-w-screen-2xl  mx-auto">
      {/* <div className="flex items-center lg:flex-col gap-5 lg:w-1/4">
        <div>
          <Image
            src="/jacket.webp"
            alt="Jacket"
            width={150}
            height={150}
            className="object-cover w-full max-w-32 sm:w-auto object-top"
          />
        </div>

        <div>
          <Image
            src="/jacket.webp"
            alt="Jacket"
            width={150}
            height={150}
            className="object-cover w-full max-w-32 sm:w-auto object-top"
          />
        </div>
      </div> */}
      {product && (
        <>
          <div className="h-full bg-gray-200 flex-1 -order-1 lg:order-[0]">
            <Image
              src={product.image.url}
              alt="Jacket"
              width={1400}
              height={500}
              className="h-full w-full object-cover object-top"
            />
          </div>

          <div className="flex-1 max-w- mt-5 lg:mt-0">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold">{product.name}</h2>
              <span className="text-black/80 text-lg">
                {product.price.formatted_with_symbol}
              </span>
            </div>
            <div
              className="py-5"
              dangerouslySetInnerHTML={{ __html: product.description }}
            />

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
        </>
      )}
    </div>
  );
};

export default Product;
