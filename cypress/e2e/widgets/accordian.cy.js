///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Accordian } from "../../support/pages/widgets/accordian";
import { path } from "../../support/data/globalElements";

describe("Accordian", () => {
  it("Expand headers and verify the content", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.accordian);
    Accordian.selectHedersAndVerifyOutput();

  });
});
