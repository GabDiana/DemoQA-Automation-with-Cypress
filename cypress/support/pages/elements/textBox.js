const { path, text } = require("../../data/elements/textBox");
export class TextkBox {
  static completeTheForm() {
    cy.get(path.userName).type(text.fullName);
    cy.get(path.userEmail).type(text.email);
    cy.get(path.currentAddress).type(text.currentAdress);
    cy.get(path.permanentAddress).type(text.permanentAdress);
    cy.get(path.submitBtn).click();
  }
  static verifyTheOutput() {
    cy.get(path.name).contains(text.fullName);
    cy.get(path.email).contains(text.email);
    cy.get(path.cadress).contains(text.currentAdress);
    cy.get(path.padress).contains(text.permanentAdress);
  }
}
