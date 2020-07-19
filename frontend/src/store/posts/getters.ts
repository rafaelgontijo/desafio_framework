import { PostState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const getters = {
    posts: (state: PostState) => state.posts,
};

const {read} = getStoreAccessors<PostState, State>('');

export const readPost = read(getters.posts);
