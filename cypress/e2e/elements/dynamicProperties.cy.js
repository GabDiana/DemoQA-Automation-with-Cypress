///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { DynamicProperties } from "../../support/pages/elements/dynamicProperties";
import { path } from "../../support/data/globalElements";

describe("Dynamic Properties", () => {
  it("Expect after 5s to change the properties", () => {
    Navigate.navigateToPage(
      path.menu.elements,
      path.elements.dynamicProperties
    );
    DynamicProperties.verifyBefore();
    DynamicProperties.verifyAfter();

  });
});
