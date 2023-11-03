///<reference types='cypress'/>
import { path, text } from "../../data/elements/brokenLinksImages";

export class BrokenLinksImages {
  static verifyValidImage() {
    cy.get(path.validImage)
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(300);
      });
  }
  static verifyBorkenImage() {
    cy.get(path.brokenImage)
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.equal(0);
      });
  }
  static verifyValidLink() {
    cy.get(path.validLink)
      .invoke("attr", "href")
      .then((link) => {
        cy.visit(link);
      });
    cy.url().should("contain", text.newURL);
    cy.go("back");
  }
}
