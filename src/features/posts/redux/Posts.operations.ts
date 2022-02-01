import { Dispatch } from "redux";
import { PostsActions } from "./Posts.actions";
import { PostsManager } from "./Posts.manager";

export const getPostsList = () => async (dispatch: Dispatch) => {
    dispatch(PostsActions.setPostsLoading(true));
    const posts = await PostsManager.getPostsLists();
    dispatch(PostsActions.setPostsLoading(false));

    dispatch(PostsActions.setPosts(posts));
}
