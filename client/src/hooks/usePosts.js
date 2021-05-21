import axios from 'axios'
import { useQuery } from "react-query";

export const usePosts = () => {
    return useQuery('posts',async () => await axios.get('http://posts.com/posts'))
}