"use client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  disabled,
}: CustomButtonProps) => {
  return (
    <>
      <button
        title={title}
        disabled={disabled}
        type={btnType || "button"}
        className={`btn ${containerStyles}`}
        onClick={handleClick}
      >
        <span className="flex-1">{title}</span>
      </button>
    </>
  );
};

export default CustomButton;
