import Vue from 'vue';
import Vuex from 'vuex';
import map from './modules/map';

Vue.use(Vuex);

// eslint-disable-next-line
export default new Vuex.Store({
    modules: {
        map,
    },
});
