import FormInput from "@/components/auth/FormInput";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Login = () => {
  return (
    <div className="px-5 py-8 bg-white max-w-lg mx-auto mt-32">
      <h2 className="mb-5 text-lg text-center font-semibold">Login</h2>
      <form className="w-full">
        <FormInput type="email" placeholder="Email" errorMessage="" />
        <FormInput type="password" placeholder="Email" errorMessage="" />
        <Link href="/" className="text-sm ml-auto block -mt-2 w-fit">
          Forgot Password?
        </Link>
        <Button type="text" className="w-full bg-black/80 text-white mt-8">
          Login
        </Button>
      </form>

      <div className="text-center mt-3">
        <p>
          Not a member?{" "}
          <Link href="/auth/register" className="text-gray-600">
            register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
