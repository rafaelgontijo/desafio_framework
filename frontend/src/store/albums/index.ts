import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { AlbumState } from './state';

const defaultState: AlbumState = {
  albums: [],
};

export const albumsModule = {
  state: defaultState,
  mutations,
  actions,
  getters,
};
