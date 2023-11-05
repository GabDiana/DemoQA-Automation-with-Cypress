const { path, text } = require("../../data/widgets/datePicker");

export class DatePicker {
  static selectDateAndVerify() {
    cy.get(path.data).click();
    cy.get(path.year).select("1995");
    cy.get(path.month).select("April");
    cy.get(path.day).contains("13").eq(0).click();
    cy.get(path.data).should("have.value", "04/13/1995");
  }

  static selectDateTimeAndVerify() {
    cy.get(path.dateTime).click();
    cy.get(path.year2).click();
    cy.get(path.yearDropdown).contains("2022").click();
    cy.get(path.month2).click();
    cy.get(path.month2).contains("June").click();
    cy.get(path.day2).contains("13").eq(0).click();
    cy.get(path.time).scrollIntoView().click();
    cy.get(path.dateTime).should("have.value", "June 13, 2022 4:15 AM");
  }
}
