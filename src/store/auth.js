import firebase from "firebase/app"

export default {
    state: {
        isAuth: false
    },
    actions: {
        async signIn({dispatch, commit}, {email, password})
        {
            console.log(dispatch, commit);
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                commit('setIsAuth', true);
                await dispatch('fetchInfo');
            } catch(e) {
                console.log(e);
                throw e;
            }
        },
        async signUp({dispatch}, {email, password, name})
        {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = await dispatch('getUid');
                await firebase.database().ref(`/users/${uid}/info`).set({
                    name
                });
            } catch(e) {
                console.log(e);
                throw e;
            }
        },
        getUid()
        {
            const user = firebase.auth().currentUser;
            return user ? user.uid : null;
        },
        async logout({commit}) 
        {
            await firebase.auth().signOut();
            await commit('clearInfo');
            commit('setIsAuth', false);
        }
    },
    mutations: {
        setIsAuth: function(state, value) 
        {
            state.isAuth = value;
        }
    },
    getters: {
        isAuth: s => s.isAuth
    }
}