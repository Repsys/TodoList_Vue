import firebase from "firebase/app"

export default {
    state: {
        info: {

        }
    },
    actions: {
        async fetchInfo({getters, commit}) {
            try {
                const uid = getters.uid;
                const info = (await firebase.database().ref(`/users/${uid}/info`).once('value')).val()
                commit('setInfo', info);
            } catch (e) {
                console.log(e);
                throw e;
            }
        }
    },
    mutations: {
        setInfo(state, info) 
        {
            state.info = info;
        },
        clearInfo(state)
        {
            state.info = {};
        }
    },
    getters: {
        info: s => s.info
    }
}