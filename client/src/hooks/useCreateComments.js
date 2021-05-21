import { useMutation } from "react-query";
import axios from 'axios'
import { client } from "..";

export const useCreateComments = (postId, content) => {
    return useMutation(async () => await axios.post(`http://posts.com/posts/${postId}/comments`, { content }, {
        onSuccess: () => client.invalidateQueries(['comments', postId])
    })
    )
}
