const changeCertainMenu = require("./changeCertainMenus");

module.exports = (mainFile, data) => {
  const newData = () => {
    let newFile;
    let expression;
    if (data.url) {
      expression = /(url:)\s('|")(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?('|")(,)/gi;
      newFile = mainFile.replace(expression, `url: '${data.url}',`);
      return newFile;
    } else if (data.lang) {
      expression = /(lang:)\s('|")[a-zA-z]{2}('|")/gi;
      newFile = mainFile.replace(expression, `lang: '${data.lang}'`);
      return newFile;
    } else if (data.menuFetchMode) {
      if (data.menuFetchMode === "each") {
        expression = /(menus:)\s.+/g;
        newFile = mainFile.replace(expression, "");
        return newFile;
      } else if (data.menuFetchMode === "certain") {
        const changeCertain = changeCertainMenu(mainFile, data);
        newFile = changeCertain;
        return newFile;
      } else if (data.menuFetchMode === "none") {
        // to do
        return "is none";
      }
      return newFile;
    }
  };

  return newData();
};
