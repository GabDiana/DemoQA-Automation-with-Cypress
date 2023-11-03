const { path, text } = require("../../data/alertsFrameWindows/modalDialogs");

export class ModalDialogs {
  static verifySmallModal() {
    cy.get(path.smallModalBtn).click()
    cy.get(path.smallModalHeader).contains(text.headerSmallModal)
    cy.get(path.closeSmallButton).click()
    
  }
  static verifyLargeModal() {
    cy.get(path.largeModalBtn).click()
    cy.get(path.largeModalHeader).contains(text.headerLargeModal)
    cy.get(path.closeLargeButton).click()
    
  }
}
