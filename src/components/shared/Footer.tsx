import React from "react";
import { Footer } from "antd/es/layout/layout";
import Link from "next/link";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

interface INav {
  title: string;
  href: string;
}

const PageFooter = () => {
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

  const SOCIALS = [
    {
      name: "Twitter(X)",
      icon: <FaXTwitter />,
      href: "https://twitter.com/_Babayeju",
    },
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/c-blaq/shop-ease",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/fathi-babayeju",
    },
  ];

  return (
    <Footer className="px-5 border-t border-black/50 text-xs sm:text-sm">
      <div className="max-w-screen-2xl mx-auto flex flex-col xs:flex-row gap-5 justify-between items-center">
        <h3 className="whitespace-nowrap">
          &copy;2024 Fathi. All rights reserved
        </h3>

        <nav className="flex gap-5 items-center">
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

        <div className="flex gap-5 items-center">
          {SOCIALS.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              className="hover:text-gray-500 transition duration-300"
            >
              {social.icon}
            </Link>
          ))}
        </div>
      </div>
    </Footer>
  );
};

export default PageFooter;
