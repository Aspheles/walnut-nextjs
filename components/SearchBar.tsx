"use client";
import React, { useState, useEffect } from "react";
import { CustomButton } from ".";
import { fetchAllBrands } from "@/utils";

const SearchBar = () => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    console.log("trying to fetch all brands");
    const fetchedAllBrands = fetchAllBrands();

    console.log(fetchedAllBrands);
  };

  return (
    <form className="searchbar">
      <div className="flex gap-8 mt-8">
        <div className="flex items-center h-12 rounded-lg focus-within:shadow-lg bg-white overflow-hidden w-1/4">
          <div className="grid place-items-center h-full w-12 text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          <input
            className="peer h-full w-full outline-none text-sm text-gray-900 pr-2"
            type="text"
            id="search"
            placeholder="Search brand.."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <CustomButton
          title={"Search"}
          containerStyles={
            "bg-purple-700 hover:bg-purple-800 text-white inline-flex items-center justify-center h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-deep-purple-accent-100 focus:shadow-outline focus:outline-none"
          }
          disabled={false}
          handleClick={SearchBar}
        />
      </div>
    </form>
  );
};

export default SearchBar;
