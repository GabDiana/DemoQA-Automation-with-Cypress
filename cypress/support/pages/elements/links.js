const { path, text } = require("../../data/elements/links");

export class Links {

  static openHomePageNewTab() {
    cy.get(path.homeLink).invoke("removeAttr", "target").click();
    cy.url().should("eq", "https://demoqa.com/");
    cy.go("back");
  }

  static sendCreatedRequestAndVerifyUI() {
    cy.intercept("/created").as("create");
    cy.get(path.createdLink).click();
    cy.wait("@create").its("response.statusCode").should("eq", 201);
    cy.get(path.linkResponse).contains(text.createdResponse);
  }
  
  static sendNoContentRequestAndVerifyUI() {
    cy.intercept("/no-content").as("no-content");
    cy.get(path.noContentLink).click();
    cy.wait("@no-content").its("response.statusCode").should("eq", 204);
    cy.get(path.linkResponse).contains(text.noContentResponse);
  }

  static sendMovedRequestAndVerifyUI() {
    cy.intercept("/moved").as("moved");
    cy.get(path.movedLink).click();
    cy.wait("@moved").its("response.statusCode").should("eq", 301);
    cy.get(path.linkResponse).contains(text.movedResponse);
  }

  static sendBadRequestAndVerifyUI() {
    cy.intercept("/bad-request").as("bad-request");
    cy.get(path.badRequestLink).click();
    cy.wait("@bad-request").its("response.statusCode").should("eq", 400);
    cy.get(path.linkResponse).contains(text.badRequestResponse);
  }

  static sendUnauthorizedRequestAndVerifyUI() {
    cy.intercept("/unauthorized").as("unauthorized");
    cy.get(path.unauthorizedLink).click();
    cy.wait("@unauthorized").its("response.statusCode").should("eq", 401);
    cy.get(path.linkResponse).contains(text.unauthorizedResponse);
  }

  static sendForbiddenRequestAndVerifyUI() {
    cy.intercept("/forbidden").as("forbidden");
    cy.get(path.forbiddenLink).click();
    cy.wait("@forbidden").its("response.statusCode").should("eq", 403);
    cy.get(path.linkResponse).contains(text.forbiddenResponse);
  }

  static sendNotFoundRequestAndVerifyUI() {
    cy.intercept("/invalid-url").as("invalid-url");
    cy.get(path.notFoundLink).click();
    cy.wait("@invalid-url").its("response.statusCode").should("eq", 404);
    cy.get(path.linkResponse).contains(text.notFoundResponse);
  }
}
