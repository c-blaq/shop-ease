import * as React from "react";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { CgMenuRightAlt } from "react-icons/cg";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";
import { IoBagOutline } from "react-icons/io5";
import { Button } from "antd";

export function NavDrawer() {
  const NAV_ITEMS = [
    {
      title: "Men",
      href: "/category/men",
    },
    {
      title: "Women",
      href: "/category/women",
    },
    {
      title: "Bags",
      href: "/category/bags",
    },
  ];

  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <button className="text-2xl">
          <CgMenuRightAlt />
        </button>
      </DrawerTrigger>
      <DrawerContent className="top-0 right-0 ml-auto mt-0 w-2/3">
        <div className="mx-auto w-full">
          <DrawerHeader>
            <DrawerTitle className="flex justify-between">
              <h1>ShopEase</h1>
              <DrawerClose asChild>
                <button>
                  <FaTimes />
                </button>
              </DrawerClose>
            </DrawerTitle>
            {/* <DrawerDescription>Set your daily activity goal.</DrawerDescription> */}
          </DrawerHeader>

          <div className="p-4 pb-0">
            <nav className="flex flex-col gap-6">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-gray-500 hover:p-2 hover:bg-black/[0.06] transition duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </nav>

            <div className="flex flex-col gap-6 mt-6">
              <Link
                href="/"
                className="flex items-center gap-2 hover:p-2 hover:bg-black/[0.06]"
              >
                <IoBagOutline
                  size={"24px"}
                  className="hover:!text-gray-500  transition duration-300"
                />
                <span>Cart</span>
              </Link>
              <Button type="text" className="bg-black/80 text-white">
                Login
              </Button>
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
