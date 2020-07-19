import { ITodo } from '@/interfaces';
import { TodoState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { State } from '../state';

export const mutations = {
    setTodos(state: TodoState, payload: ITodo[]) {
        state.todos = payload;
    },
};

const { commit } = getStoreAccessors<TodoState, State>('');

export const commitSetTodos = commit(mutations.setTodos);
