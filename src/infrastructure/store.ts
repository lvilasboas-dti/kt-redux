import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { connect } from 'react-redux';
import type { ConnectedProps } from 'react-redux';
import { UserReducer } from '../features/user/redux/User.reducer';
import { postsReducer } from '../features/posts/redux/Posts.reducer';

const reducers = combineReducers({
    user: UserReducer,
    posts: postsReducer,
});

export const store = createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));
export type RootState = ReturnType<typeof store.getState>;
