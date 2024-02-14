import { Input } from "antd";
import React from "react";

interface IInput {
  type: string;
  placeholder: string;
  errorMessage?: string;
}

const FormInput = ({ type, placeholder, errorMessage }: IInput) => {
  return (
    <div className="mb-5">
      <Input
        type={type}
        placeholder={placeholder}
        className="focus:!border-black"
      />
      {errorMessage && (
        <p className="text-xs text-red-500 mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default FormInput;
