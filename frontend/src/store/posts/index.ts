import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { PostState } from './state';

const defaultState: PostState = {
  posts: [],
};

export const postsModule = {
  state: defaultState,
  mutations,
  actions,
  getters,
};
