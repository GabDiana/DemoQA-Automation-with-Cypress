const { path, text } = require("../../data/alertsFrameWindows/browserWindows");
export class BrowserWindows {
  static clickAndVerifyNewTab() {
    cy.window().then((win) => {
      cy.stub(win, "open").as("sampleTab");
    });
    cy.get(path.newTab).click();
    cy.get("@sampleTab").should("be.called");
  }

  static clickAndVerifyNewWindow() {
    cy.get(path.newWindow).click();
    cy.get("@sampleTab").should("be.called");
  }

  static clickAndVerifyNewWindowMessage() {
    cy.get(path.newWindowMessage).click();
    cy.get("@sampleTab").should("be.called");
  }
}
