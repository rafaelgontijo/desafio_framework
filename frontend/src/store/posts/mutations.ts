import { IPost } from '@/interfaces';
import { PostState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const mutations = {
    setPosts(state: PostState, payload: IPost[]) {
        state.posts = payload;
    },
};

const { commit } = getStoreAccessors<PostState, State>('');

export const commitSetPosts = commit(mutations.setPosts);
