"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label="Walnut"
              title="Walnut"
              className="inline-flex items-center mr-8"
            >
              <Image
                src={"/logo.png"}
                width={150}
                height={100}
                alt="Walnut Logo"
                className="mx-auto m-4"
              ></Image>
            </a>
            <ul className="flex items-center  space-x-8 lg:flex">
              <Link href={"/"}>
                <li>
                  <a
                    aria-label="Home"
                    title="Home Page"
                    className="font-medium tracking-wide text-black-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Home
                  </a>
                </li>
              </Link>
              <Link href={"/createBrand"}>
                <li>
                  <a
                    aria-label="Our product"
                    title="Create Brand"
                    className="font-medium tracking-wide text-black-100 transition-colors duration-200 hover:text-teal-accent-400"
                  >
                    Create Brand
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
