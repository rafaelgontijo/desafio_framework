import { TodoState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const getters = {
    todo: (state: TodoState) => state.todos,
};

const {read} = getStoreAccessors<TodoState, State>('');

export const readTodo = read(getters.todo);
