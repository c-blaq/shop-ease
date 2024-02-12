import React from "react";
import { Badge } from "antd";
import { IoBagOutline } from "react-icons/io5";

const CartBadge = () => {
  return (
    <Badge count={1} overflowCount={20}>
      <IoBagOutline
        size={"24px"}
        className="hover:!text-gray-500  transition duration-300"
      />
    </Badge>
  );
};

export default CartBadge;
