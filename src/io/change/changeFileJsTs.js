module.exports = (mainFile, data) => {
  const newData = () => {
    let newFile;
    let expression;
    if (data.url) {
      expression = /(url:)\s('|")(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?('|")(,)/gi;
      newFile = mainFile.replace(expression, `url: '${data.url}',`);
      return newFile;
    } else if (data.lang) {
      expression = /(lang:)\s('|")[a-zA-z]{2}('|")(,)/gi;
      newFile = mainFile.replace(expression, `lang: '${data.lang}',`);
      return newFile;
    } else {
      return data;
    }
  };

  return newData();
};
