const { path, text } = require("../../data/widgets/accordian");

export class Accordian {
  static selectHedersAndVerifyOutput() {
    cy.get(path.body1).should("be.visible");
    cy.get(path.body2).should("not.be.visible");
    cy.get(path.body3).should("not.be.visible");
    cy.get(path.body1).contains(text.body1text);
    cy.get(path.heading1).click();
    cy.get(path.body1).should("not.be.visible");
    cy.get(path.body2).should("not.be.visible");
    cy.get(path.body3).should("not.be.visible");
    cy.get(path.heading2).click();
    cy.get(path.body1).should("not.be.visible");
    cy.get(path.body2).should("be.visible");
    cy.get(path.body3).should("not.be.visible");
    cy.get(path.body2).contains(text.body2text);
    cy.get(path.heading3).click();
    cy.get(path.body1).should("not.be.visible");
    cy.get(path.body2).should("not.be.visible");
    cy.get(path.body3).should("be.visible");
    cy.get(path.body3).contains(text.body3text);
    cy.get(path.heading3).click();
    cy.get(path.body1).should("not.be.visible");
    cy.get(path.body2).should("not.be.visible");
    cy.get(path.body3).should("not.be.visible");
  }
}
