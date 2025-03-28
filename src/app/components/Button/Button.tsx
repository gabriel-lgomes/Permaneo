import { ButtonProps } from "@/app/interfaces/Button";
import React, { FC } from "react";

const Button: FC<ButtonProps> = ({ children, type, ...props }) => {
  return (
    <button
      {...props}
      className={`${
        type === "primary" ? "bg-primary text-white" : "bg-secondary text-black"
      } rounded-xl px-6 py-2 w-fit cursor-pointer transition-all hover:scale-105`}
    >
      {children}
    </button>
  );
};

export default Button;
