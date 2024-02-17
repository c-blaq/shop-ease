"use client";

import React from "react";
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import Image from "next/image";
import { FaHeart } from "react-icons/fa6";
import Link from "next/link";
import { useCart } from "@/context/CartProvider";
import { Product } from "@chec/commerce.js/types/product";

interface IProduct {
  product: Product;
}

const ProductCard = ({ product }: IProduct) => {
  const { handleAddItemToCart } = useCart();

  return (
    <Card
      hoverable
      cover={
        <Link href={`/product/${product.permalink}`}>
          <div className="relative">
            <Image
              src={product.image?.url}
              alt="example"
              width={500}
              height={500}
              placeholder="blur"
              blurDataURL="htr"
              className="max-h-72 object-cover object-center !rounded-none !rounded-bl-3xl"
            />

            {/* <FaHeart className="text-white text-xl hover:text-stone-500 absolute top-5 right-5" /> */}
          </div>
        </Link>
      }
      className="rounded-none bg-transparent [&_.ant-card-body]:px-3 [&_.ant-card-cover]:!bg-gray-200 [&_.ant-card-cover]:!rounded-bl-3xl !rounded-tr-3xl overflow-clip"
    >
      <Meta
        title={product.name}
        description={<p>{product.price.formatted_with_symbol}</p>}
      />
      <Button
        className="ml-auto  block text-sm w-fit mt-5 bg-black/80 text-white transition duration-300"
        type="text"
        onClick={() => handleAddItemToCart()}
      >
        Add to cart
      </Button>
    </Card>
  );
};

export default ProductCard;
