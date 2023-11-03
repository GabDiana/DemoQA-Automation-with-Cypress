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
    firstName: "Anna",
    lastName: "Loran",
    email: "anna.loran@test.com",
    emailWithoutDot: "anna.loran@testcom",
    emailWithoutAt: "anna.lorantest.com",
    age: "5",
    salary: "7000",
    department: "IT",
    newFirstName: "new Anna",
    newLastName: "new Loran",
    newEmail: "new.anna.loran@test.com",
    newAge: "56",
    newSalary: "79000",
    newDepartment: "HR",
  },
};
