import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const CAROUSEL_IMAGES = [
    // {
    //   imageSrc: "/girlFashionModel.jpg",
    //   imageName: "Girl Model",
    // },
    {
      imageSrc: "/clothShopping.avif",
      imageName: "cloth Shopping",
    },
    {
      imageSrc: "/peopleFashionModel.webp",
      imageName: "People Model",
    },
    {
      imageSrc: "/shoppingBag.avif",
      imageName: "Shopping Bag",
    },
  ];

  return (
    <div className="h-screen pt-40 text-center bg-gray-300 [&_.ant-carousel]:!h-full">
      <Carousel autoplay className="h-full w-full">
        {CAROUSEL_IMAGES.map(({ imageName, imageSrc }) => (
          <div key={imageName} className="">
            <span> {imageName}</span>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
