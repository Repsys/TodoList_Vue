import Vue from 'vue'
import Vuex from 'vuex'
import popup from './popup'
import auth from './auth'
import info from './info'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        popup,
        auth,
        info
    }
});