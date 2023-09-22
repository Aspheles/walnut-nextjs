"use client";
import { BrandModalFormData, BrandModalProps } from "@/types";
import { createBrand } from "@/utils";
import React, { useState } from "react";
import { CustomButton } from ".";
import { redirect } from "next/dist/server/api-utils";
import Router from "next/router";

const CreateBrandModal = () => {
  const [formData, setFormData] = useState<BrandModalFormData>({
    name: "",
    logo: "",
    primaryColor: "",
    secondColor: "",
    thirdColor: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const response = await createBrand(formData);

    if (response) {
      alert("Brand has been created");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="min-h-screenpy-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
            <div className="max-w-md mx-auto">
              <div className="flex items-center space-x-5">
                <div className="h-14 w-14 bg-yellow-200 rounded-full flex flex-shrink-0 justify-center items-center text-yellow-500 text-2xl font-mono">
                  i
                </div>
                <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
                  <h2 className="leading-relaxed">Create an Brand</h2>
                  <p className="text-sm text-gray-500 font-normal leading-relaxed">
                    Create your own brand with the new customized colors
                  </p>
                </div>
              </div>
              <div className="divide-y divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="flex flex-col">
                    <label className="leading-loose">Brand Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Brand Name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Logo url</label>
                    <input
                      type="text"
                      id="logo"
                      name="logo"
                      value={formData.logo}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Brand Logo"
                    />{" "}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col">
                      <label className="leading-loose">Primary Color</label>
                      <div className="relative focus-within:text-gray-600 text-gray-400">
                        <input
                          type="text"
                          id="primaryColor"
                          name="primaryColor"
                          value={formData.primaryColor}
                          onChange={handleChange}
                          required
                          className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                          placeholder="Primary Color"
                        />{" "}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="leading-loose">Secondary Color</label>
                    <div className="relative focus-within:text-gray-600 text-gray-400">
                      <input
                        type="text"
                        id="secondColor"
                        name="secondColor"
                        value={formData.secondColor}
                        onChange={handleChange}
                        required
                        className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                        placeholder="Second Color"
                      />{" "}
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <label className="start">Third Color</label>
                    <input
                      type="text"
                      id="thirdColor"
                      name="thirdColor"
                      value={formData.thirdColor}
                      onChange={handleChange}
                      required
                      className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                      placeholder="Third Color"
                    />{" "}
                  </div>
                </div>
                <div className="pt-4 flex items-center space-x-4">
                  <CustomButton
                    title={"Create brand"}
                    btnType={"submit"}
                    disabled={false}
                    containerStyles="bg-blue-500 flex justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default CreateBrandModal;
