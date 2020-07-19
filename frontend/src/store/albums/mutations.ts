import { IAlbum } from '@/interfaces';
import { AlbumState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const mutations = {
    setAlbums(state: AlbumState, payload: IAlbum[]) {
        state.albums = payload;
    },
};

const { commit } = getStoreAccessors<AlbumState, State>('');

export const commitSetAlbums = commit(mutations.setAlbums);
