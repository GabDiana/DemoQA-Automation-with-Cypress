const { path, text } = require("../../data/alertsFrameWindows/nestedFrames");

export class NestedFrames {
  static verifyChildFrameContent() {
    cy.get(path.parentFrame).its("0.contentDocument").as("frame");
    cy.get("@frame").should("exist");
    cy.get("@frame").find("body").contains(text.parentContent);
    cy.get("@frame").find(path.childFrame)
        .its("0.contentDocument").as("childFrame");
    cy.get("@childFrame").find("body").contains(text.childContent);
  }
}
