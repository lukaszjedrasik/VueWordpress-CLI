module.exports = mainFile => {
  const lang = mainFile.match(/(lang:)\s.+/g);
  expression = /(menus:)\s.+/g;
  const oldContent = mainFile.replace(expression, "");
  newFile = oldContent.replace(lang, lang);

  return newFile;
};
