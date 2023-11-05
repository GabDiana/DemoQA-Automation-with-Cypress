const { path, text } = require("../../data/widgets/autoComplete");

export class AutoComplete {
  static typeMultipleColorsAndVerifyOutput() {
    const char=text.character.charAt(text.randomIndex)
    cy.get(path.multipleColors).type(char);
    cy.get(path.options).should('contain.text', char).type('{enter}');
    cy.get(path.multipleColors).type(char);
    cy.get(path.options).should('contain.text', char).type('{enter}');
  }

  static typeSingleColorsAndVerifyOutput() {
    const color1=text.character.charAt(text.randomIndex)
    const color2=text.character.charAt(text.randomIndex+1)
    cy.get(path.singleColor).type(color1);
    cy.get(path.options).should('contain.text', color1).type('{enter}');
    cy.get(path.singleColor).type(color2);
    cy.get(path.options).should('contain.text', color2).type('{enter}');


  }
}
