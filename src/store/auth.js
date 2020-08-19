import firebase from "firebase/app"

export default {
    state: {
        user: null,
        isAuth: false
    },
    actions: {
        async signIn({dispatch}, {email, password})
        {
            try {
                await firebase.auth().signInWithEmailAndPassword(email, password);
                await dispatch('fetchInfo');
            } catch(e) {
                console.log(e);
                throw e;
            }
        },
        async signUp({getters}, {email, password, name})
        {
            try {
                await firebase.auth().createUserWithEmailAndPassword(email, password);
                const uid = getters.uid;
                await firebase.database().ref(`/users/${uid}/info`).set({name});
            } catch(e) {
                console.log(e);
                throw e;
            }
        },
        
        async logout({commit}) 
        {
            await firebase.auth().signOut();
            await commit('clearInfo');
        },

        fetchUser({ dispatch, commit }, user) 
        {
            commit("setIsAuth", user !== null);
            if (user) {
              commit("setUser", user);
              dispatch('fetchInfo');
            } else {
              commit("setUser", null);
            }
        }
    },
    mutations: {
        setUser: (state, user) => state.user = user,
        setIsAuth: (state, isAuth) => state.isAuth = isAuth
    },
    getters: {
        isAuth: (state) => state.isAuth,
        uid: (state) => state.user ? state.user.uid : null
    }
}