import { api } from '@/api';
import { ActionContext } from 'vuex';
import { State } from '../state';
import { PostState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { commitSetPosts } from './mutations';
import { dispatchCheckApiError } from '../main/actions';

type MainContext = ActionContext<PostState, State>;

export const actions = {
    async actionGetPosts(context: MainContext) {
        try {
            const response = await api.getPosts(context.rootState.main.token);
            if (response) {
                commitSetPosts(context, response.data);
            }
        } catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
};

const { dispatch } = getStoreAccessors<PostState, State>('');

export const dispatchGetPosts = dispatch(actions.actionGetPosts);
