module.exports = answers => {
  const bodyJsTs = `
    import Vue from 'vue'
    import App from "./App.vue";
    import store from './store'
    import router from './router'
    import './registerServiceWorker'
    import Wordpress from '@vue-wordpress/core'

    Vue.use(Wordpress, {
      config: {
        url: '${answers.url}',
        lang: '${answers.lang.toLowerCase()}',
        ${
          answers.menus === "disable"
            ? "menus: false"
            : "" || answers.menus === "default"
            ? ""
            : `menus: [${answers.menus.map(v => `"${v}"`)}]`
        }
      },
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
