import axios from "axios"

export const PostsService = {
    getPostsList: async () => {
        return axios.get('https://jsonplaceholder.typicode.com/posts');
    }
}
