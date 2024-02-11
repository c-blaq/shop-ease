import { Carousel } from "antd";
import Image from "next/image";
import React from "react";

const Hero = () => {
  const CAROUSEL_IMAGES = [
    {
      imageSrc: "/peopleFashionModel.webp",
      imageName: "People Model",
    },
    {
      imageSrc: "/shoppingBag.avif",
      imageName: "Shopping Bag",
    },
    {
      imageSrc: "/cloth.png",
      imageName: "cloth Shopping",
    },
    {
      imageSrc: "/clothes.jpg",
      imageName: "People Model",
    },
  ];

  return (
    <div className="h-dvh md:h-screen bg-gray-300 [&_.ant-carousel]:!h-full">
      <Carousel autoplay effect="fade" className="h-full w-full">
        {CAROUSEL_IMAGES.map(({ imageName, imageSrc }) => (
          <div key={imageName} className="h-screen w-full">
            <Image
              src={imageSrc}
              alt={imageName}
              width={1400}
              height={1400}
              priority
              fetchPriority="high"
              className="object-cover origin-center  w-full h-full"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Hero;
