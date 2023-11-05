///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Menu } from "../../support/pages/widgets/menu";
import { path } from "../../support/data/globalElements";

describe("Menu", () => {
  it("Check the color and navigate to last sub sub item", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.menu);
    Menu.navigateToSubSubItem();
  });
});
