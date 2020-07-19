import Vue from 'vue';
import Vuex, { StoreOptions } from 'vuex';

import { mainModule } from './main';
import { State } from './state';
import { todoModule } from './todo';
import { postsModule } from './posts';
import { albumsModule } from './albums';

Vue.use(Vuex);

const storeOptions: StoreOptions<State> = {
  modules: {
    main: mainModule,
    todo: todoModule,
    posts: postsModule,
    albums: albumsModule,
  },
};

export const store = new Vuex.Store<State>(storeOptions);

export default store;
