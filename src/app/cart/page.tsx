import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="py-32 max-w-screen-2xl mx-auto px-5">
      <div>
        <h2 className="text-lg sm:text-2xl mb-3">Cart</h2>
        <Link
          href="/"
          className="flex items-center gap-1 hover:underline hover:text-inherit"
        >
          <FaChevronLeft />
          continue shopping
        </Link>
      </div>
    </div>
  );
};

export default Cart;
