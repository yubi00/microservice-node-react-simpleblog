import axios from "axios";
import { useQuery } from "react-query";

export const useComments = (postId) => {
  return useQuery(`${postId}comments`, () =>
    axios.get(`http://posts.com/posts/${postId}/comments`)
  );
};
