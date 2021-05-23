import axios from "axios";
import { useQuery } from "react-query";

export const usePosts = () => {
  return useQuery("posts", async () => {
    const res = await axios.get("http://posts.com/posts");
    return Object.values(res.data);
  });
};
