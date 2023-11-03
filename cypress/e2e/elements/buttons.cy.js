///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { Buttons } from "../../support/pages/elements/buttons";
import { path } from "../../support/data/globalElements";

describe("Buttons", () => {
  it("Click on buttons and verify the output", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.buttons);
    Buttons.doubleClickAndVerify();
    Buttons.rightClickAndVerify();
    Buttons.clickMeAndVerify();
  });
});
