import { getApiTokenKey } from "@/utils";
import axios from "axios";

const API_BASE_URL: string = process.env.WALNUT_API_BASE_URL || "";


export const GET = async (req: Request, res: Response) => {

  try {
    const fetchedToken = await getApiTokenKey();

    if (!fetchedToken.data.key) {
      console.error("[Api: key token not found]");
      return;
    }

    const brandResponse = await axios.get(
      `${API_BASE_URL}/brands`,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${fetchedToken.data.key}`,
        },
      }
    );

    if (brandResponse.status !== 200) {
      throw new Error("Network response for fetching brands was not ok");
    }

    return Response.json(brandResponse.data);
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};

export const POST = async (req: Request, res: Response) => {
  const body = await req.json();
  const fetchedToken = await getApiTokenKey();

  try {
    const response = await axios.post(
      `${API_BASE_URL}/brands`, JSON.stringify(body),
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${fetchedToken.data.key}`,
        },
      }
    );

    return Response.json(response.data);
  } catch (error) {
    console.error("Error fetching brands:", error);
    throw error;
  }
};
