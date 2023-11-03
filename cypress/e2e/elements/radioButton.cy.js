///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { RadioButton } from "../../support/pages/elements/radioButton";
import { path } from "../../support/data/globalElements";
describe("Radio Button", () => {
  it("select and deselect radio buttons", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.radioButton);
    RadioButton.selectYesOption();
    RadioButton.verifyYesOption();
    RadioButton.selectImpressiveOption();
    RadioButton.verifyImpressiveOption();
    RadioButton.verifyNoOptionDisabled();
  });
});
