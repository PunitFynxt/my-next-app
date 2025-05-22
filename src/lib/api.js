// lib/api.js
import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_STRAPI_API_URL;

export const fetchAPI = async (path) => {
  try {
    const response = await axios.get(`${API_URL}/api${path}?populate=*`);
    debugger;
    return response.data.data;
  } catch (error) {
    console.error(`Error fetching ${path}:`, error);
    return null;
  }
};
