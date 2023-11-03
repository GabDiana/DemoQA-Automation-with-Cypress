const { path, text } = require("../../data/alertsFrameWindows/frames");

export class Frames {

  static verifyFirstFrame() {
    cy.get(path.firstFrame).its('0.contentDocument').as('frame')
    cy.get('@frame').should('exist')
    cy.get('@frame').find(path.frameHeader).contains(text.frameContent)

  }
  static verifySecondFrame() {
    cy.get(path.secondFrame).its('0.contentDocument').as('frame')
    cy.get('@frame').should('exist')
    cy.get('@frame').find(path.frameHeader).contains(text.frameContent)
  }
}