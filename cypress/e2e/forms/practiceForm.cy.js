///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { PracticeForm } from "../../support/pages/forms/practiceForm";
import { path } from "../../support/data/globalElements";

describe("Practice form", () => {
  it("Successful submit the form", () => {
    Navigate.navigateToPage(path.menu.forms, path.forms.practiceForm);
    PracticeForm.completeAllFields();
    PracticeForm.verifyTheOutput();
  });
});
