import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { TodoState } from './state';

const defaultState: TodoState = {
  todos: [],
};

export const todoModule = {
  state: defaultState,
  mutations,
  actions,
  getters,
};
