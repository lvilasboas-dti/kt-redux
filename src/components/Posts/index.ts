import { connect } from 'react-redux';
import { RootState } from '../../infrastructure';
import { Posts } from './Posts';
import * as PostsOperations from '../../features/posts/redux/Posts.operations';

const mapStateToProps = (state: RootState) => ({
    postsList: state.posts.postsList,
    loading: state.posts.postsLoading,
});

const mapDispatchToProps = {
    getPostsLists: () => PostsOperations.getPostsList(),
}

const PostsConnected = connect(mapStateToProps, mapDispatchToProps)(Posts);

export { PostsConnected as Posts };
