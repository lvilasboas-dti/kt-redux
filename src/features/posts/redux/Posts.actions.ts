export const PostsActionsConstants = {
    SetPosts: 'SET_POSTS',
    SetPostsLoading: 'SET_POSTS_LOADING',
};

export const PostsActions = {
    setPosts: (posts: any): ReduxAction => ({
        type: PostsActionsConstants.SetPosts,
        payload: posts,
    }),

    setPostsLoading: (loading: boolean): ReduxAction => ({
        type: PostsActionsConstants.SetPostsLoading,
        payload: loading,
    }),
};
