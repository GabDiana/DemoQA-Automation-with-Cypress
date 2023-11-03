///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { TextkBox } from "../../support/pages/elements/textBox";
import { path } from "../../support/data/globalElements";

describe("Text Box", () => {
  it("Successful submit ", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.textBox);
    TextkBox.completeTheForm();
    TextkBox.verifyTheOutput();
  });
});
