const { path, text } = require("../../data/forms/practiceForm");

export class PracticeForm {
  
  static completeAllFields() {
    cy.get(path.firstName).type(text.firstName);
    cy.get(path.lastName).type(text.lastName);
    cy.get(path.email).type(text.email);
    cy.get(path.female).click({ force: true });
    cy.get(path.mobileNumber).type(text.mobileNumber);
    cy.get(path.birthDate).click();
    cy.get(path.yesr).select(text.birthDate);
    cy.get(path.date).click();
    cy.get(path.subjects).type(text.subjects);
    cy.get(path.subjectsOptions).click();
    cy.get(path.sports).check({ force: true });
    cy.get(path.reading).check({ force: true });
    cy.get(path.music).check({ force: true });
    cy.fixture(text.photoNama).as("photo");
    cy.get(path.chooseFile).selectFile("@photo");
    cy.get(path.currentAdress).type(text.currentAdress);
    cy.get(path.state).click({force: true});
    cy.get(path.stateName).click({force: true});
    cy.get(path.city).click({force: true});
    cy.get(path.cityName).click({force: true});
    cy.get(path.submit).click({ force: true });
  }

  static verifyTheOutput() {
    cy.get(path.modal).should("exist");
    cy.get(path.rows).contains(text.studentNameLabel)
      .siblings().contains(text.firstName + " " + text.lastName);
    cy.get(path.rows).contains(text.studentEmailLabel)
      .siblings().contains(text.email);
    cy.get(path.rows).contains(text.genderLabel)
      .siblings().contains(text.genderName);
    cy.get(path.rows).contains(text.mobileLabel)
      .siblings().contains(text.mobileNumber);
    cy.get(path.rows).contains(text.dateOfBirthLabel)
      .siblings().contains(text.birthDate);
    cy.get(path.rows).contains(text.subjectLabel)
      .siblings().contains(text.subjects);
    cy.get(path.rows).contains(text.hobbiesLabel)
      .siblings().contains(text.hobby1 + ", " + text.hobby2 + ", " + text.hobby3);
    cy.get(path.rows).contains(text.pictureLabel)
      .siblings().contains(text.photoNama);
    cy.get(path.rows).contains(text.addressLabel)
      .siblings().contains(text.currentAdress);
    cy.get(path.rows).contains(text.stateAndCityLabel)
      .siblings().contains(text.state);
    cy.get(path.closeModal).click();
  }
}
