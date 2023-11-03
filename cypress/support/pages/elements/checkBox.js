import { path } from "../../data/elements/checkBox";

export class CheckBox {
  static expandAllOptions() {
    cy.get(path.expandAll).click();
  }

  static verifyAllOptionsAreVisible() {
    cy.get(path.options).should("have.length", 17).and("be.visible");
  }

  static collapseAll() {
    cy.get(path.collapseAll).click();
  }

  static verifyAllOptionsAreHidden() {
    cy.get(path.options).should("have.length", 1).and("be.visible");
  }

  static checkHomeOption() {
    cy.get(path.options).contains("Home").click();
  }

  static verifyAllOptionsAreChecked() {
    cy.get(path.checkedOptions).should("have.length", 1).and("be.visible");
    this.expandAllOptions();
    cy.get(path.checkedOptions).should("have.length", 17);
    cy.get(path.checkedOutput).should("have.length", 17);
  }

  static uncheckHomeOption() {
    cy.get(path.options).contains("Home").click();
  }

  static verifyAllOptionsAreUnchecked() {
    cy.get(path.uncheckedOptions).should("have.length", 17).and("be.visible");
    cy.get(path.checkedOutput).should("not.exist");
  }

  static checkRandomOptions() {
    cy.get(path.options)
      .eq(Math.floor(Math.random() * 15 + 1))
      .click()
      .then((option) => {
        const output = option.text();
        cy.get(path.checkedOutput).contains(output, { matchCase: false });
      });
  }

  static verifyCheckedOptions() {
    cy.get(path.checkedOutput).should("exist").and("have.length.at.least", 1);
  }
}
