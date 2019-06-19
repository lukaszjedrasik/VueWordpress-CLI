module.exports = (answers, file) => {
  const bodyNuxt = file.replace(
    "modules: [",
    `modules: [
    [
      '@vue-wordpress/nuxt',
      {
        config: {
          url: '${answers.url}',
          lang: '${answers.lang}'
        },
        store: true,
        router: true
      }
    ],`
  );
  return bodyNuxt;
};
