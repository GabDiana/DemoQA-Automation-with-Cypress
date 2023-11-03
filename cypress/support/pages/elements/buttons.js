///<reference types='cypress'/>
import { path, text } from "../../data/elements/buttons";

export class Buttons {
  static doubleClickAndVerify() {
    cy.get(path.doubleClick).dblclick();
    cy.get(path.outputDoubleClick).should("exist")
      .and("contain", text.output + text.doubleClick);
  }
  static rightClickAndVerify() {
    cy.get(path.rightClick).rightclick();
    cy.get(path.outputRightClick).should("exist")
      .and("contain", text.output + text.rightClick);
  }
  static clickMeAndVerify() {
    cy.get(path.clickMe).should("have.text", text.clickMeButton).click();
    cy.get(path.outputClickMe).should("exist")
      .and("contain", text.output + text.clickMe);
  }
}
