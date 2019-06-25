module.exports = (mainFile, data) => {
  let lang = /(lang:)\s.+('|")/g;
  lang = mainFile.match(lang);
  let content;
  const exp = /(menus:)\s.+/g;
  const pass = mainFile.match(exp);
  if (pass) {
    expression = /(menus:)\s.+/g;
    newFile = mainFile.replace(
      expression,
      data.menus.length === 1
        ? `menus: '${data.menus}',`
        : `menus: [${data.menus.map(v => `"${v}"`)}],`
    );
  } else {
    const newMenus =
      data.menus.length === 1
        ? `menus: '${data.menus}'`
        : `menus: [${data.menus.map(v => `"${v}"`)}]`;

    content = `${lang},
    ${newMenus}`;

    newFile = mainFile.replace(lang, content);
  }
  return newFile;
};
