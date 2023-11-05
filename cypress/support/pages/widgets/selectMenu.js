const { path } = require("../../data/widgets/selectMenu");

export class SelectMenu {

  static selectValueAndVerify() {

    cy.get(path.selectValue).click();
    cy.get(path.selectValueOption).should("be.visible").click();
  }

  static selectOneAndVerify() {
    cy.get(path.selectOne).click();
    cy.get(path.selectOneDropdown).should("be.visible");
    cy.get(path.selectOneOptionMrs).should("be.visible").click();
  }
  static oldStileMenuVerify() {
    cy.get(path.oldStyleMenu).select(4);
  }
  static multipleDropdownVerify() {
    cy.get(path.multiselectDropdown).click();
    cy.get(path.multiselectorMenu).should("be.visible");
    cy.get(path.multiselectOption1).click();
    cy.get(path.multiselectOption2).click();
  }
  static multiSelectVerify() {
    cy.get(path.standartMultiSelect).select(2);
  }
}
