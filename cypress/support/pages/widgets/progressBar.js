const { path, text } = require("../../data/widgets/progressBar");

export class ProgressBar {

  static startProgressBarAndVeify() {
    cy.get(path.startBtn).contains(text.startBtn)
    cy.get(path.startBtn).click()
    cy.get(path.startBtn).contains(text.stopBtn)
    cy.wait(4000).get(path.progress).should('have.text','50%')
    cy.get(path.startBtn).click()
    cy.get(path.startBtn).contains(text.startBtn)
    cy.get(path.startBtn).click()
    cy.wait(4000).get(path.progress).should('have.text','100%')
    cy.get(path.resetBtn).contains(text.resetBtn)
  }
}
