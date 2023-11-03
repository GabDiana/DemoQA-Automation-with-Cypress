///<reference types='cypress'/>
import { path, text } from "../../data/elements/webTables";

export class WebTables {
  static addNewRow() {
    cy.get(path.addButton).contains(text.add).click();
    cy.get(path.firstName).type(text.firstName);
    cy.get(path.lastName).type(text.lastName);
    cy.get(path.email).type(text.email);
    cy.get(path.age).type(text.age);
    cy.get(path.salary).type(text.salary);
    cy.get(path.department).type(text.department);
    cy.get(path.submitForm).click();
  }

  static verifyNewRow() {
    cy.get(path.search).clear().type(text.email);
    cy.get(path.rowsPerPage)
      .children()
      .eq(0)
      .then((rows) => {
        expect(rows).to.contain(text.firstName);
        expect(rows).to.contain(text.lastName);
        expect(rows).to.contain(text.email);
        expect(rows).to.contain(text.age);
        expect(rows).to.contain(text.salary);
        expect(rows).to.contain(text.department);
      });
  }

  static validateTheRegistrationForm() {
    //all fields are empty
    cy.get(path.addButton).contains(text.add).click();
    cy.get(path.submitForm).click();
    cy.get(path.invalidFirstName).should("exist");
    cy.get(path.invalidLastName).should("exist");
    cy.get(path.invalidEmail).should("exist");
    cy.get(path.invalidAge).should("exist");
    cy.get(path.invalidSalary).should("exist");
    cy.get(path.invalidDepartment).should("exist");
    cy.get(path.invalidFields).should("have.length", 6);
    //only two fields are completed
    cy.get(path.firstName).type(text.firstName);
    cy.get(path.lastName).type(text.lastName);
    cy.get(path.invalidFields).should("have.length", 4);
    //email without @
    cy.get(path.email).type(text.emailWithoutAt);
    cy.get(path.age).type(text.age);
    cy.get(path.salary).type(text.salary);
    cy.get(path.department).type(text.department);
    cy.get(path.invalidFields).should("have.length", 1);
    cy.get(path.invalidEmail).should("exist");
    //email without Dot
    cy.get(path.email).clear().type(text.emailWithoutDot);
    cy.get(path.invalidFields).should("have.length", 1);
    cy.get(path.invalidEmail).should("exist");
    cy.get(path.closeForm).click();
  }

  static editOneRow() {
    cy.get(path.rowsPerPage).children().contains(text.firstName).as("row");
    cy.get("@row").siblings().eq(5).children().children().eq(0).click();
    cy.get(path.firstName).clear().type(text.newFirstName);
    cy.get(path.lastName).clear().type(text.newLastName);
    cy.get(path.email).clear().type(text.newEmail);
    cy.get(path.age).clear().type(text.newAge);
    cy.get(path.salary).clear().type(text.newSalary);
    cy.get(path.department).clear().type(text.newDepartment);
    cy.get(path.submitForm).click();
  }

  static verifyEditedRow() {
    cy.get(path.search).clear().type(text.newEmail);
    cy.get(path.rowsPerPage)
      .children()
      .eq(0)
      .then((rows) => {
        expect(rows).to.contain(text.newFirstName);
        expect(rows).to.contain(text.newLastName);
        expect(rows).to.contain(text.newEmail);
        expect(rows).to.contain(text.newAge);
        expect(rows).to.contain(text.newSalary);
        expect(rows).to.contain(text.newDepartment);
      });
  }

  static searchByFirstName() {
    cy.get(path.search).clear().type(text.newFirstName);
    cy.get(path.rowsPerPage).contains(text.newFirstName);
  }

  static searchByLastNaame() {
    cy.get(path.search).clear().type(text.newLastName);
    cy.get(path.rowsPerPage).contains(text.newLastName);
  }

  static searchByAge() {
    cy.get(path.search).clear().type(text.newEmail);
    cy.get(path.rowsPerPage).contains(text.newEmail);
  }

  static searchByEmail() {
    cy.get(path.search).clear().type(text.newAge);
    cy.get(path.rowsPerPage).contains(text.newAge);
  }

  static searchBySalary() {
    cy.get(path.search).clear().type(text.newSalary);
    cy.get(path.rowsPerPage).contains(text.newSalary);
  }

  static searchByDepartment() {
    cy.get(path.search).clear().type(text.newDepartment);
    cy.get(path.rowsPerPage).contains(text.newDepartment);
    cy.get(path.search).clear();
  }

  static deleteOneRow() {
    cy.get(path.rowsPerPage).children().contains(text.firstName).as("row");
    cy.get("@row").siblings().eq(5).children().children().eq(1).click();
  }

  static verifyRowWasDeleted() {
    cy.get(path.search).clear().type(text.newEmail);
    cy.get(path.rowsPerPage).then((rows) => {
      expect(rows).not.to.contain(text.firstName);
      expect(rows).not.to.contain(text.lastName);
      expect(rows).not.to.contain(text.email);
      expect(rows).not.to.contain(text.age);
      expect(rows).not.to.contain(text.salary);
      expect(rows).not.to.contain(text.department);
    });
    cy.get(path.search).clear();
  }

  static selectNrOfRowsPerPageAndVerify() {
    const options = ["5", "10", "20", "25", "50", "100"];
    options.forEach((option) => {
      cy.get(path.pageSizeOptions).select(option, { force: true });
      cy.get(path.rowsPerPage).should("have.length", option);
    });
  }

  static addThreeRows() {
    for (let i = 0; i <= 2; i++) {
      cy.get(path.addButton).contains(text.add).click();
      cy.get(path.firstName).type(text.firstName + i);
      cy.get(path.lastName).type(text.lastName + i);
      cy.get(path.email).type(i + text.email);
      cy.get(path.age).type(text.age + i);
      cy.get(path.salary).type(text.salary + i);
      cy.get(path.department).type(text.department + i);
      cy.get(path.submitForm).click();
    }
  }

  static verifyPreviousNextButtons() {
    cy.get(path.pageSizeOptions).select("5", { force: true });
    cy.get(path.previous).should("be.disabled");
    cy.get(path.next).should("be.enabled");
    cy.get(path.next).click();
    cy.get(path.previous).should("be.enabled");
    cy.get(path.next).should("be.disabled");
    cy.get(path.previous).click();
  }
}
