///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { CheckBox } from "../../support/pages/elements/checkBox";
import { path } from "../../support/data/globalElements";

describe("Elements", () => {
  it("Expend and Collapse", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.checkBox);
    CheckBox.expandAllOptions();
    CheckBox.verifyAllOptionsAreVisible();
    CheckBox.collapseAll();
    CheckBox.verifyAllOptionsAreHidden();
  });
  it("Check and Uncheck Home Option", () => {
    CheckBox.checkHomeOption();
    CheckBox.verifyAllOptionsAreChecked();
    CheckBox.uncheckHomeOption();
    CheckBox.verifyAllOptionsAreUnchecked();
  });
  it("Check random options", () => {
    CheckBox.checkRandomOptions();
    CheckBox.verifyCheckedOptions();
  });
});
