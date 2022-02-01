import { FC, useEffect } from 'react';
import { Post } from '../../shared/models';

import styles from './Posts.module.scss';

interface PostsProps {
    postsList: Post[] | null;
    loading: boolean;
    getPostsLists: () => void;
}

export const Posts: FC<PostsProps> = ({ postsList, getPostsLists, loading }) => {
    useEffect(() => {
        if(!postsList)
            getPostsLists();
    }, []);

    return (
        <div>
            <h1>Posts</h1>

            {loading ? 'Carregando posts...' : ''}

            {!!postsList &&
                <>
                    {postsList.length}
                </>
            }
        </div>
    )
}
