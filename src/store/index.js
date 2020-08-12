import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        curPopup: {
            name: "empty",
            isChoice: false,
            submitText: "empty",
            cancelText: "empty",
            contentText: "empty",
            submitFunc: function(){},
            isVisible: false
        }
    },
    getters: {
        getCurPopup: state => {
            return state.curPopup;
        }
    },
    mutations:{
        setCurPopup: function(state, payload) {
            state.curPopup = {
                name: "empty",
                isChoice: false,
                submitText: "empty",
                cancelText: "empty",
                contentText: "empty",
                submitFunc: function(){},
                isVisible: true
            };
            state.curPopup = Object.assign(state.curPopup, payload);
        }
    }
});