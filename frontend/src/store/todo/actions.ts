import { api } from '@/api';
import { ActionContext } from 'vuex';
import { State } from '../state';
import { TodoState } from './state';
import { getStoreAccessors } from 'typesafe-vuex';
import { commitSetTodos } from './mutations';
import { dispatchCheckApiError } from '../main/actions';

type MainContext = ActionContext<TodoState, State>;

export const actions = {
    async actionGetTodos(context: MainContext) {
        try {
            const response = await api.getTodos(context.rootState.main.token);
            if (response) {
                commitSetTodos(context, response.data);
            }
        } catch (error) {
            await dispatchCheckApiError(context, error);
        }
    },
};

const { dispatch } = getStoreAccessors<TodoState, State>('');

export const dispatchGetTodos = dispatch(actions.actionGetTodos);
