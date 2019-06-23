module.exports = (answers, file) => {
  const bodyNuxt = () => {
    const addModule = file.replace(
      "modules: [",
      `modules: [
    [
      '@vue-wordpress/nuxt',
      {
        config: {
          url: '${answers.url}',
          lang: '${answers.lang.toLowerCase()}'
        },
        store: true,
        router: true
      }
    ],
    `
    );
    const content = addModule.replace(
      `  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }`,
      `  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {},
    transpile: ['@vue-wordpress/core']
  }`
    );
    return content;
  };
  return bodyNuxt();
};
