import React from "react";
import { Badge } from "antd";
import { IoBagOutline } from "react-icons/io5";
import { useCart } from "@/context/CartProvider";

const CartBadge = () => {
  const { cartItemsCount } = useCart();

  return (
    <Badge count={cartItemsCount} overflowCount={20}>
      <IoBagOutline
        size={"24px"}
        className="hover:!text-gray-500  transition duration-300"
      />
    </Badge>
  );
};

export default CartBadge;
