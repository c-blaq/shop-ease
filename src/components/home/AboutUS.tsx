import React from "react";
import Image from "next/image";

const AboutUS = () => {
  return (
    <div className="pb-10 md:pb-20">
      <div className="flex gap-5 items-center flex-col-reverse sm:flex-row">
        <div className="flex-1">
          <h2 className="text-xl font-semibold mb-3 sm:mb-5">About Us</h2>
          <p className="text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            asperiores at repellat, ut quaerat totam sint, nihil deserunt iste
            veniam aut fugiat illo modi quia magni beatae commodi nesciunt nemo.
          </p>
        </div>

        <div className="h-full bg-gray-200 overflow-clip flex-1 -mx-5 sm:mx-0">
          <Image
            src="/aboutBanner.jpg"
            alt="About banner"
            width={500}
            height={500}
            fetchPriority="high"
            priority
            className="object-cover aspect-square w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUS;
