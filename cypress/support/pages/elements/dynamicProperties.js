///<reference types='cypress'/>
import { path, text } from "../../data/elements/dynamicProperties";

export class DynamicProperties {
  static verifyBefore() {
    cy.get(path.willEnableBtn).should("be.disabled");
    cy.get(path.colorChangeBtn).should("have.css","color","rgb(255, 255, 255)");
    cy.get(path.visibleAfterBtn).should("not.exist");
  }
  static verifyAfter() {
    cy.wait(5000);
    cy.get(path.willEnableBtn).should("be.enabled");
    cy.get(path.colorChangeBtn).should("have.css", "color", "rgb(220, 53, 69)");
    cy.get(path.visibleAfterBtn).should("exist");
  }
}
