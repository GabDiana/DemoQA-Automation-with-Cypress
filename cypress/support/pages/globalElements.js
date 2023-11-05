export class Navigate {
  static navigateToPage(category, page) {
    cy.on("uncaught:exception", () => {
      return false;
    });
    cy.intercept(
      {hostname: "pagead2.googlesyndication.com",}," "
      );
    cy.visit("https://demoqa.com");
    cy.get(category).click();
    cy.get(page).click();
  }
}
