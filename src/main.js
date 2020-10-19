import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false


import * as firebase from "firebase/app";

var firebaseConfig = {
  apiKey: "AIzaSyDqx5eEH_GByAyuqmLjNoEq0XHDzJ5ivxI",
  authDomain: "ip2-demo.firebaseapp.com",
  databaseURL: "https://ip2-demo.firebaseio.com",
  projectId: "ip2-demo",
  storageBucket: "ip2-demo.appspot.com",
  messagingSenderId: "916796694936",
  appId: "1:916796694936:web:c69054ab39f22a3e24cbed",
  measurementId: "G-XDPL6XSN7L"
};

firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
