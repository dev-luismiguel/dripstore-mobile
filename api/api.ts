import axios from "axios";

import { ProductApiType } from "./api.props";

const BASE_URL = "https://drip-store-fs08-temp-api.vercel.app";

export const fetchProducts = async (): Promise<ProductApiType[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/products`);
    return response.data;
  } catch (error) {
    alert(error);
    console.error("Error fetching products:", error);
    return [];
  }
};
