"use client";

import { useCart } from "@/context/CartProvider";
import { LineItem } from "chec__commerce.js/types/line-item";
import { Button } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { FaMinus } from "react-icons/fa";
import { FaChevronLeft, FaDeleteLeft, FaTrash } from "react-icons/fa6";
import Loader from "@/components/shared/Loader";

const Cart = () => {
  const {
    cartItems,
    fetchCart,
    handleEmptyCart,
    handleRemoveFromCart,
    handleUpdateCartQty,
  } = useCart();

  useEffect(() => fetchCart, []);

  return (
    <div className="py-24 md:py-32 max-w-4xl mx-auto px-5">
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

      {Object.keys(cartItems).length === 0 ? (
        <div className="min-h-[200px] flex justify-center items-center">
          <Loader />
        </div>
      ) : (
        <div className="w-full mt-10">
          <table className="w-full min-h-36">
            <thead className="border-t-2 border-b-2">
              <tr>
                <th className="py-2 px-2 sm:px-0">Product</th>
                <th className="py-2 px-2 sm:px-0 hidden sm:block">Price</th>
                <th className="py-2 px-2 sm:px-0">Quantity</th>
                <th className="py-2 px-2 sm:px-0">Amount</th>
              </tr>
            </thead>

            <tbody className="text-center">
              {cartItems.line_items?.length ? (
                cartItems.line_items?.map((item: LineItem) => (
                  <tr key={item.id} className="border-b-2">
                    <td className="py-2 px-2 sm:px-0">
                      <div className="flex flex-col sm:flex-row justify-center items-center gap-2">
                        <Image
                          src={item.image?.url}
                          alt="jacket"
                          width={50}
                          height={50}
                        />
                        <div>
                          <h3>Jacket</h3>
                        </div>
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:px-0 hidden sm:block">
                      {item.price.formatted_with_symbol}
                    </td>
                    <td className="py-2 px-2 sm:px-0">
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-1 disabled:cursor-not-allowed disabled:text-black/50">
                        <Button
                          type="text"
                          onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity - 1)
                          }
                          disabled={item.quantity === 1}
                        >
                          -
                        </Button>
                        <span>{item.quantity}</span>
                        <Button
                          type="text"
                          onClick={() =>
                            handleUpdateCartQty(item.id, item.quantity + 1)
                          }
                        >
                          +
                        </Button>
                      </div>
                    </td>
                    <td className="py-2 px-2 sm:px-0">
                      {item.line_total.formatted_with_symbol}{" "}
                      <span className="block text-gray-400 sm:hidden">
                        ({item.price.formatted_with_symbol})
                      </span>
                    </td>
                    <td className="py-2 px-2 sm:px-0 w-5">
                      <Button
                        type="text"
                        className="text-black/75 hover:!text-red-500"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className="text-base">No item in cart!</td>
                </tr>
              )}
            </tbody>
          </table>

          {cartItems.line_items?.length !== 0 && (
            <div className="mt-5  items-center justify-between">
              <h2 className="text-xl">
                Subtotal: {cartItems.subtotal?.formatted_with_symbol}
              </h2>
              <div className="flex mt-5 gap-5">
                <Button
                  type="text"
                  className="border border-black rounded-sm flex-1"
                  onClick={() => handleEmptyCart()}
                >
                  Clear
                </Button>
                <Link
                  href="/checkout"
                  className="flex flex-1 justify-center items-center px-5 bg-black/95 rounded-sm hover:bg-black/[0.06] hover:text-black text-white"
                >
                  Checkout
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Cart;
