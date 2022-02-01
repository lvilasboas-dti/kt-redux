import { PostsService } from "../../../infrastructure/Posts.service"
import { Post } from "../../../shared/models";

const Sleep = async (seconds: number) => {
    return new Promise<void>(resolve => {
        setTimeout(resolve, seconds * 1000);
    });
}

export const PostsManager = {
    getPostsLists: async () => {
        try {
            const response = await PostsService.getPostsList();

            await Sleep(5);

            if(response.data?.length) {
                const posts = response.data.map((p: any) => Post.MakePost(p));
                return posts;
            }

            return null;
        }
        catch(err) {
            return null;
        }
    },
}
