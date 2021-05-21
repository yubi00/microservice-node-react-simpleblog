
import axios from 'axios'
import { useQuery } from "react-query";

export const useComments = (postId) => {
    return useQuery(['comments', postId],async () => await axios.get(`http://posts.com/posts/${postId}/comments`))
}