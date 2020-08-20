import Vue from 'vue'
import Vuex from 'vuex'
import popup from './popup'
import auth from './auth'
import info from './info'
import data from './data'

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        setError({commit}, error)
        {
            commit('setCurPopup', {
                name: "Error: " + error.code,
                isChoice: false,
                submitText: "ОК",
                contentText: error.message
            });
        }
    },
    modules: {
        popup,
        auth,
        info,
        data
    }
});