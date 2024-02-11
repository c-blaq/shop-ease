"use client";

import React, { useState } from "react";
import { Header } from "antd/es/layout/layout";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "antd";
import { CgMenuRightAlt } from "react-icons/cg";
import { NavDrawer } from "./Drawer";

interface INav {
  title: string;
  href: string;
}

const PageHeader = () => {
  const NAV_ITEMS: INav[] = [
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
    <Header className="bg-transparent fixed z-10 left-0 right-0 top-5 px-5">
      <div className="flex justify-between items-center gap-5 bg-white/30 w-full max-w-screen-2xl mx-auto rounded-full backdrop-blur-md py-4 xs:py-0 px-5">
        <nav className="hidden xs:flex gap-5 items-center">
          {NAV_ITEMS.map((item: INav) => (
            <Link
              key={item.title}
              href={item.href}
              className="hover:text-gray-500 transition duration-300"
            >
              {item.title}
            </Link>
          ))}
        </nav>

        <h1 className="text-lg sm:text-xl font-semibold transition duration-300">
          <Link href="/" className="hover:!text-gray-500">
            ShopEase
          </Link>
        </h1>

        <div className="hidden xs:flex items-center gap-5">
          <IoBagOutline
            size={"24px"}
            className="hover:!text-gray-500  transition duration-300"
          />
          <Button type="text">Login</Button>
        </div>

        <div className="flex xs:hidden gap-4 items-center">
          <IoBagOutline
            size={"24px"}
            className="hover:!text-gray-500  transition duration-300"
          />
          <NavDrawer />
        </div>
      </div>
    </Header>
  );
};

export default PageHeader;
