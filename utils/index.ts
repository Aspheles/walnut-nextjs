import axios from "axios";
import { BrandModalFormData } from "@/types";

const PUBLIC_BASE_URL: string = process.env.NEXT_PUBLIC_BASE_URL || "";
const API_EMAIL: string = process.env.WALNUT_API_EMAIL || "";
const API_PASSWORD: string = process.env.WALNUT_API_PASSWORD || "";

const getApiTokenKey = async () => {
  const apiAuthData = {
    email: API_EMAIL,
    password: API_PASSWORD,
    permissions: [
      "brands.get",
      "brands.store",
      "brands.update",
      "brands.delete",
    ],
  };

  try {
    const response = await axios.post(
      `${PUBLIC_BASE_URL}/api/token`,
      apiAuthData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

const fetchAllBrands = async () => {
  try {
    const response = await axios.get(`${PUBLIC_BASE_URL}/api/brands`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};

const createBrand = async (BrandModalFormData: BrandModalFormData) => {
  const brandFormData = {
    organization_id: "zqzx2ZpGpgY2IAb7ypipEJzdL3",
    name: BrandModalFormData.name,
    logo: BrandModalFormData.logo,
    primary_color: BrandModalFormData.primaryColor,
    second_color: BrandModalFormData.secondColor,
    third_color: BrandModalFormData.thirdColor,
  };

  try {
    const response = await axios.post(
      `${PUBLIC_BASE_URL}/api/brands`,
      brandFormData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      }
    );

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export { fetchAllBrands, createBrand, getApiTokenKey };
