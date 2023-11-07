import{faker}from'@faker-js/faker'

module.exports = {
  path: {
    //buttons
    addButton: "#addNewRecordButton",
    submitForm: "#submit",
    previous: "div > div.-previous > button",
    next: "div > div.-next > button",
    edit: '.action-buttons span[title="Edit"]',
    delete: 'span[title="Delete"]',
    closeForm: "div.modal-header > button",

    // select
    pageSize: "span.select-wrap.-pageSizeOptions > select",
    pageSizeOptions: '[aria-label="rows per page"]',

    //imputField
    firstName: "#firstName",
    lastName: "#lastName",
    email: "#userEmail",
    age: "#age",
    salary: "#salary",
    department: "#department",
    search: "#searchBox",
    rowsPerPage: ".rt-tr-group",

    //invalidFields
    invalidFirstName: "#lastName.mr-sm-2.form-control:invalid",
    invalidLastName: "#lastName.mr-sm-2.form-control:invalid",
    invalidEmail: "#userEmail.mr-sm-2.form-control:invalid",
    invalidAge: "#age.mr-sm-2.form-control:invalid",
    invalidSalary: "#salary.mr-sm-2.form-control:invalid",
    invalidDepartment: "#department.mr-sm-2.form-control:invalid",
    invalidFields: ".form-control:invalid",
  },
  text: {
    add: "Add",
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    emailWithoutDot: "anna.loran@testcom",
    emailWithoutAt: "anna.lorantest.com",
    age: faker.number.int({ min: 18, max: 99 }),
    salary: faker.number.int({ min: 1800, max: 9900 }),
    department: faker.person.jobArea(),
    newFirstName: faker.person.firstName(),
    newLastName: faker.person.lastName(),
    newEmail: faker.internet.email(),
    newAge: faker.number.int({ min: 18, max: 99 }),
    newSalary: faker.number.int({ min: 1800, max: 9900 }),
    newDepartment: faker.person.jobArea(),
  },
};
