import { Post } from "../../../shared/models";
import { PostsActionsConstants } from "./Posts.actions";

interface PostsState {
    postsList: Post[] | null;
    postsLoading: boolean;
}

const postsInitialState: PostsState = {
    postsList: null,
    postsLoading: false,
}

export const postsReducer = (state: PostsState = postsInitialState, action: ReduxAction) => {
    switch(action.type) {
        case PostsActionsConstants.SetPosts:
            return { ...state, postsList: action.payload };
        
        case PostsActionsConstants.SetPostsLoading:
            return { ...state, postsLoading: action.payload };
        
        default:
            return state;
    }
}
