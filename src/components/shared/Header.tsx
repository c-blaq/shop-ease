import React from "react";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "antd";

interface INav {
  title: string;
  href: string;
}

const PageHeader = () => {
  const NAV_ITEMS = [
    {
      title: "Men",
      href: "/",
    },
    {
      title: "Women",
      href: "/",
    },
    {
      title: "Bags",
      href: "/",
    },
  ];
  return (
    <Header className="bg-transparent ">
      <div className="flex justify-between items-center gap-5">
        <nav className="flex gap-5 items-center">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-gray-500 transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <h1 className="text-xl font-semibold transition duration-300">
          <Link href="/" className="hover:!text-gray-500">
            ShopEase
          </Link>
        </h1>

        <div className="flex items-center gap-5">
          <IoBagOutline
            size={"24px"}
            className="hover:!text-gray-500  transition duration-300"
          />
          <Button type="text">Login</Button>
        </div>
      </div>
    </Header>
  );
};

export default PageHeader;
