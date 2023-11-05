const { faker } = require("@faker-js/faker");

module.exports = {
  path: {
    multipleColors: "#autoCompleteMultipleContainer > .auto-complete__control",
    singleColor: "#autoCompleteSingleContainer",
    options: ".auto-complete__menu-list",
  },
  text: {
    randomIndex: Math.floor(Math.random() * 11),
    character: "abdegilnortuw",
  },
};
