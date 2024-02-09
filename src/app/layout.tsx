import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import "./globals.css";
import { twMerge } from "tailwind-merge";
import PageHeader from "@/components/shared/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shop Ease",
  description: "Bringing ease to your shopping spree",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.className, "#f5f5f5")}>
        <Layout className="min-h-screen">
          <PageHeader />
          <Content className="px-[50px]">{children}</Content>
          <Footer>Footer</Footer>
        </Layout>
      </body>
    </html>
  );
}
