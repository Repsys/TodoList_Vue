import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vue from 'vue'
import store from './store/'
import App from './App.vue'
import {firebaseConfig} from './firebase_config'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App)
}).$mount('#app')
