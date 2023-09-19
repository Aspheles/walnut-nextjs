import axios from "axios";
import { BrandModalFormData } from "@/types";

const API_BASE_URL: string = process.env.WALNUT_API_BASE_URL || "";
const API_EMAIL: string = process.env.WALNUT_API_EMAIL || "";
const API_PASSWORD: string = process.env.WALNUT_API_PASSWORD || "";
const API_ORGANIZATION_ID: string =
  process.env.WALNUT_API_ORGANIZATION_ID || "";

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
      "https://stagingbackend.walletapp.co/oauth/token",
      apiAuthData,
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
    console.error("Error fetching token:", error);
    throw error;
  }
};

const fetchAllBrands = async () => {
  try {
    const fetchedToken = await getApiTokenKey();
    if (!fetchedToken) {
      console.error("[Api: key token not found]");
      return;
    }

    const headers = {
      "Content-Type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${fetchedToken.data.key}`,
    };

    const brandResponse = await axios.get(
      "https://stagingbackend.walletapp.co/brands",
      { headers }
    );

    if (brandResponse.status !== 200) {
      throw new Error("Network response for fetching brands was not ok");
    }

    try {
      console.log("Trying to delete token");
      const deleteTokenResponse = await axios.delete(
        "https://stagingbackend.walletapp.co/oauth/token",
        { headers }
      );

      if (deleteTokenResponse.status !== 200) {
        throw new Error("Network response for deleting token was not ok");
      }

      if (!deleteTokenResponse.data.success) {
        console.error("Could not delete token");
        return;
      }

      console.log("Successfully deleted token");
    } catch (error) {
      console.error("Error deleting token:", error);
      throw error;
    }

    return brandResponse.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

const createBrand = async (BrandModalFormData: BrandModalFormData) => {
  const fetchedToken = await getApiTokenKey();
  if (!fetchedToken) {
    console.error("[Api: key token not found]");
    return;
  }

  try {
    const response = await axios({
      method: "POST",
      url: "https://stagingbackend.walletapp.co/brands",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${fetchedToken.data.key}`,
      },
      data: {
        organization_id: API_ORGANIZATION_ID,
        name: BrandModalFormData.name,
        primary_color: BrandModalFormData.primaryColor,
        second_color: BrandModalFormData.secondColor,
        third_color: BrandModalFormData.thirdColor,
      },
    });

    if (response.status !== 200) {
      throw new Error("Network response was not ok");
    }

    return response.data;
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export { fetchAllBrands, createBrand };
