module.exports = answers => {
  const bodyJsTs = `
    import Vue from 'vue'
    import store from 'store'
    import router from 'router'
    import Wordpress from '@vue-wordpress/core'
    import './registerServiceWorker'

    Vue.use(Wordpress, {
      config: {
        url: '${answers.url}',
        lang: '${answers.lang}',
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
    })`;

  return bodyJsTs;
};
