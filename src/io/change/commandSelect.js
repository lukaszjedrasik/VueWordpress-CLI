const changeSurvey = require("../../surveys/change");

module.exports = async (setting, value) => {
  let returnValue = "";

  switch (setting) {
    case "url":
      const expression = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/g;
      const pass = value.match(expression);
      if (pass) {
        returnValue = { url: value };
        return returnValue;
      } else {
        return "Wrong  URL value";
      }
    case "lang":
      if (value.length === 2) {
        returnValue = { lang: value };
        return returnValue;
      } else {
        return "Wrong lang value";
      }
    case "menu":
      if (value === "FetchMode") {
        let answer = await changeSurvey();
        returnValue = answer;
        return returnValue;
      } else {
        return "Value must be FetchMode";
      }

    default: {
      err = "Unknow commands";
      return err;
    }
  }
};
