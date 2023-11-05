const { path } = require("../../data/widgets/slider");

export class Slider {

  static moveSliderAndVerifyTheOutput() {

    const value = Object.getOwnPropertyDescriptor(
      window.HTMLInputElement.prototype,"value"
    ).set;
    cy.get(path.slider).should("have.value", 25)
      .then(($slider) => {
        value.call($slider[0], 58);
      })
      .trigger("change");
    cy.get(path.slider).should("have.value", 58);
  }
}
