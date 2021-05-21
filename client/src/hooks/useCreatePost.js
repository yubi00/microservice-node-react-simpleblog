import { useMutation } from "react-query";
import axios from 'axios'
import { client } from "..";

export const useCreatePost = (title) => {
    return useMutation(async () => await axios.post('http://posts.com/posts/create', { title }), {
        onSuccess: () => client.invalidateQueries('posts')
    })
}
