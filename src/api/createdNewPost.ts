import { CreatePostType } from "@/components/Layout";
import { axiosInstance } from "./instance";

export const createdNewPost = async (request: CreatePostType) => {
  try {
    const response = await axiosInstance.post("/posts", request);
    return response;
  } catch (err) {
    console.error(err);
  }
};
