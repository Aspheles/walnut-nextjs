"use client";
import React from "react";
import Image from "next/image";
import { BrandCardProps } from "@/types";

const BrandCard = ({ name, logo, identifier }: BrandCardProps) => {
  return (
    <>
      <div className="bg-white shadow-md  rounded-3xl p-4 w-1/4 m-2">
        <div className="flex-none lg:flex">
          <div className="mb-3">
            <Image
              src={logo}
              alt={name}
              className=" w-full  object-scale-down lg:object-cover  lg:h-48 rounded-2xl"
              width={100}
              height={100}
            />
          </div>
          <div className="flex-auto ml-3 justify-evenly py-2">
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                Brand
              </div>
              <h2 className="flex-auto text-lg font-medium">{name}</h2>
              Identifier: {identifier}
            </div>

            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <div className="flex-auto flex space-x-3 p-4 pt-2"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandCard;
