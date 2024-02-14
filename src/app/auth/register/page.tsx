import FormInput from "@/components/auth/FormInput";
import { Button } from "antd";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="px-5 py-8 bg-white max-w-lg mx-auto mt-32">
      <h2 className="mb-5 text-lg text-center font-semibold">Register</h2>
      <form className="w-full">
        <FormInput type="text" placeholder="First Name" errorMessage="" />
        <FormInput type="text" placeholder="Last Name" errorMessage="" />
        <FormInput type="email" placeholder="Email" errorMessage="" />
        <FormInput type="password" placeholder="Password" errorMessage="" />

        <Button type="text" className="w-full bg-black/80 text-white mt-2">
          Register
        </Button>
      </form>

      <div className="text-center mt-3">
        <p>
          Already a member?{" "}
          <Link href="/auth/register" className="text-gray-600">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
