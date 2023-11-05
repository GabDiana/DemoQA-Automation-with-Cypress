const { path, text } = require("../../data/widgets/tabs");

export class Tabs {
  
  static clickAndVerifyTheOutput() {
    cy.get(path.what).click();
    cy.get(path.outputWhat).should("be.visible").and("contain.text", text.what);
    cy.get(path.origin).click();
    cy.get(path.outputOrigin).should("be.visible").and("contain.text", text.origin);
    cy.get(path.use).click();
    cy.get(path.outputUse).should("be.visible").and("contain.text", text.use);
    cy.get(path.outputWhat).should("not.be.visible").and("contain.text", text.what);
    cy.get(path.outputOrigin).should("not.be.visible").and("contain.text", text.origin);
  }
}
