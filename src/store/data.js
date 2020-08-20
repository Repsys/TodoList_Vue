import firebase from "firebase/app"

export default {
    actions: {
        async fetchLists({dispatch, getters})
        {
            try {
                const uid = getters.uid;
                const lists = (await firebase.database().ref(`/users/${uid}/lists`).once('value')).val() || {};
                return Object.keys(lists).map(key => {
                    if (Object.prototype.hasOwnProperty.call(lists[key], "tasks"))
                        lists[key].tasks = Object.keys(lists[key].tasks).map(key0 => lists[key].tasks[key0]);
                    else
                        lists[key].tasks = [];
                    return ({...lists[key], id: key, isCurList:false, isVisible: true});
                });
            } catch(e) {
                dispatch('setError', e);
                throw e;
            }
        },
        async createList({dispatch, getters}, list)
        {
            try {
                const uid = getters.uid;
                let dbList = {...list};
                delete dbList.isCurList;
                delete dbList.isVisible;
                list.id = await firebase.database().ref(`/users/${uid}/lists`).push(dbList).getKey();
            } catch(e) {
                dispatch('setError', e);
                throw e;
            }
        },
        async removeList({dispatch, getters}, listId)
        {
            try {
                const uid = getters.uid;
                await firebase.database().ref(`/users/${uid}/lists/${listId}`).remove();
            } catch(e) {
                dispatch('setError', e);
                throw e;
            }
        },
        async updateList({dispatch, getters}, list)
        {
            try {
                const uid = getters.uid;
                await firebase.database().ref(`/users/${uid}/lists/${list.id}`).update({...list});
            } catch(e) {
                dispatch('setError', e);
                throw e;
            }
        }
    }
}