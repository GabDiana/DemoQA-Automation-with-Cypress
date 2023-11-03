const { path, text } = require("../../data/alertsFrameWindows/alerts");

export class Alerts {

  static clickAndVerifyInstantAlert() {
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns(text.promptBoxMessage).as("prompt");
    });
    cy.get(path.instantAlert).click();
    cy.on("window:alert", (alert) => {
      expect(alert).contain(text.instantAlertMessage);
    });
    cy.on("window:alert", () => true);
  }

  static clickAndVerifyDelayedAlert() {
    cy.get(path.delayedAlert).click();
    cy.wait(5000);
    cy.on("window:alert", (delayedAlert) => {
      expect(delayedAlert).contain(text.delayedAlertMessage);
    });
    cy.on("window:alert", () => true);
  }

  static clickAndVerifyConfirmBox() {
    cy.get(path.confirmBox).click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal(text.confirmBoxMessage);
    });
    cy.on("window:confirm", () => true);
  }

  static clickAndVerifyPromptBox() {
    cy.get(path.promptBox).click();
    cy.on("window:confirm", (confirm) => {
      expect(confirm).to.equal(text.promptBoxMessage);
      cy.get("@prompt").should("be.called");
    });
    cy.get(path.promptResult).contains(text.promptBoxMessage)
  }
}
