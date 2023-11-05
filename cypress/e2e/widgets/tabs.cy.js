///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Tabs } from "../../support/pages/widgets/tabs";
import { path } from "../../support/data/globalElements";

describe("Tabs", () => {
  it("Select Tabs One By One And Verify The output", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.tabs);
    Tabs.clickAndVerifyTheOutput();
  });
});
