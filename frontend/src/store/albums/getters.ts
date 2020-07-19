import { AlbumState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const getters = {
    albums: (state: AlbumState) => state.albums,
};

const {read} = getStoreAccessors<AlbumState, State>('');

export const readAlbum = read(getters.albums);
