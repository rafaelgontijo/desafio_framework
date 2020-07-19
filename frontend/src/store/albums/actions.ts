import { api } from '@/api';
import { ActionContext } from 'vuex';
import { State } from '../state';
import { AlbumState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { commitSetAlbums } from './mutations';
import { dispatchCheckApiError } from '../main/actions';

type MainContext = ActionContext<AlbumState, State>;

export const actions = {
    async actionGetAlbums(context: MainContext) {
        try {
            const response = await api.getAlbums(context.rootState.main.token);
            if (response) {
                commitSetAlbums(context, response.data);
            }
        } catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
};

const { dispatch } = getStoreAccessors<AlbumState, State>('');

export const dispatchGetAlbums = dispatch(actions.actionGetAlbums);
