const changeCertainMenus = require("./changeCertainMenus");
const changeEachMenus = require("./changeEachMenus");

module.exports = (mainFile, data) => {
  const newData = () => {
    let newFile;
    let expression;
    if (data.url) {
      expression = /(url:)\s('|")(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?('|")(,)/gi;
      newFile = mainFile.replace(expression, `url: '${data.url}',`);
      return newFile;
    } else if (data.lang) {
      expression = /(lang:)\s('|")[a-zA-z]{2}('|")/g;
      newFile = mainFile.replace(expression, `lang: '${data.lang}'`);
      return newFile;
    } else if (data.menuFetchMode) {
      if (data.menuFetchMode === "each") {
        const changeEach = changeEachMenus(mainFile);
        newFile = changeEach;
      } else if (data.menuFetchMode === "certain") {
        const changeCertain = changeCertainMenus(mainFile, data);
        newFile = changeCertain;
      } else if (data.menuFetchMode === "none") {
        const menusExpression = /(menus:)\s.+/g;
        const pass = mainFile.match(menusExpression);
        if (pass) {
          newFile = mainFile.replace(menusExpression, `menus: false,`);
        } else {
          const langExpression = /(lang:)\s.+/g;
          const lang = mainFile.match(langExpression);
          const content = `${lang} 
    menus: false,`;
          newFile = mainFile.replace(lang, content);
        }
      }
      return newFile;
    }
  };

  return newData();
};
