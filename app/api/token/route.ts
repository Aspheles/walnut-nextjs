import axios from "axios";
import { NextResponse } from "next/server";

const API_BASE_URL: string = process.env.WALNUT_API_BASE_URL || "";

//Get API Token
export const POST = async (req: Request, res: Response) => {
  const body = await req.json();

  try {
    const response = await axios.post(
      `${API_BASE_URL}/oauth/token`,
      JSON.stringify(body),
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

    return NextResponse.json(response.data);
  } catch (error) {
    console.error("Error fetching token:", error);
    throw error;
  }
};
