module.exports = answers => {
  const bodyJsTs = `import Vue from 'vue'
import App from "./App.vue";
import store from './store'
import router from './router'
import './registerServiceWorker'
import Wordpress from '@vue-wordpress/core'

Vue.use(Wordpress, {
  url: '${answers.url}',
  lang: '${answers.lang.toLowerCase()}',
  ${
    answers.menus === "disable"
      ? `menus: false,`
      : "" || answers.menus === "default"
      ? ""
      : answers.menus.length === 1
      ? `menus: '${answers.menus}',`
      : `menus: [${answers.menus.map(v => `"${v}"`)}],`
  }
  store,
  router
})
    
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");`;

  return bodyJsTs;
};
