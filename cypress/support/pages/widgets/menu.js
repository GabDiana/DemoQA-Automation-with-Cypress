const { path, text } = require("../../data/widgets/menu");

export class Menu {

  static navigateToSubSubItem() {
    cy.get(path.subMenu1).should("not.be.visible");
    cy.get(path.menuItem2).realHover();
    cy.get(path.subMenu1).should("be.visible");
    cy.get(path.subSubMenu1).should("not.be.visible");
    cy.get(path.subMenu3).realHover();
    cy.get(path.subSubMenu1).should("be.visible").and("contain.text", text.subSubMenu);
  }
}
