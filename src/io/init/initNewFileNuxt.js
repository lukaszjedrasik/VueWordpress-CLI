const expression = /(build:)\s.+/g;

module.exports = (answers, file) => {
  const bodyNuxt = () => {
    const addModule = file.replace(
      "modules: [",
      `modules: [
    [
      '@vue-wordpress/nuxt',
      {
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
        store: true,
        router: true
      }
    ],
    `
    );
    const content = addModule.replace(
      expression,
      `  build: {
    transpile: ['@vue-wordpress/core'],`
    );
    return content;
  };
  return bodyNuxt();
};
