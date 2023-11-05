///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { AutoComplete } from "../../support/pages/widgets/autoComplete";
import { path } from "../../support/data/globalElements";

describe("Auto Complete", () => {
  it("Type the color and verify the output", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.autoComplete);
    AutoComplete.typeMultipleColorsAndVerifyOutput();
    AutoComplete.typeSingleColorsAndVerifyOutput();
  });
});
