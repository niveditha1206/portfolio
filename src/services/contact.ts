import { ContactMessage } from "@/types";
import axios from "axios";

export const sendContactMessage = async (data: ContactMessage) => {
  const response = await axios.post("/api/contact", data);
  return response?.data;
};
