"use client";

import React from "react";
import Image from "next/image";
import { CustomButton } from ".";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Hero */}
      <div className="bg-purple-700">
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
            <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
              <a href="/" className="sm:mx-auto">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-teal-accent-400"></div>
              </a>
              <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <Image
                  src={"/logo.png"}
                  width={200}
                  height={200}
                  alt="Walnut Logo"
                  className="mx-auto m-4"
                ></Image>
                <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-5xl md:mx-auto">
                  CREATING <span className="text-[#00a3fe]">INNOVATIVE</span>{" "}
                  SOLUTIONS
                </h2>
                <p className="text-base text-white md:text-lg">
                  Jouw all-in-one marketing & loyalty platform. Benieuwd naar de
                  mogelijkheden? Bekijk al onze partners en slimme oplossingen.
                </p>
              </div>
              <div>
                <Link href={"/"}>
                  <CustomButton
                    title={"Get Started"}
                    containerStyles={
                      "bg-[#00a3fe] hover:bg-sky-600 text-white inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
                    }
                    btnType={"button"}
                    disabled={false}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Content */}
      <div></div>
    </>
  );
};

export default Hero;
