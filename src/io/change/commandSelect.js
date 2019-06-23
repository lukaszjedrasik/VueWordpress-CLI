const changeSurvey = require("../../surveys/change");

module.exports = async (setting, value) => {
  let returnValue = "";

  switch (setting) {
    case "url":
      const expressionURL = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
      const passURL = value.match(expressionURL);
      if (passURL) {
        returnValue = { url: value };
        return returnValue;
      } else {
        return false;
      }
    case "lang":
      const expressionLang = /^[a-zA-z]{2}$/g;
      const passLang = value.match(expressionLang);
      if (passLang) {
        returnValue = { lang: value };
        return returnValue;
      } else {
        return false;
      }
    case "menu":
      if (value === "FetchMode") {
        let answer = await changeSurvey();
        returnValue = answer;
        return returnValue;
      } else {
        return false;
      }

    default: {
      err = "Unknown commands";
      return err;
    }
  }
};
