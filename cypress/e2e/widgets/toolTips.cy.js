///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { ToolTips } from "../../support/pages/widgets/toolTips";
import { path } from "../../support/data/globalElements";

describe("Tool Tips", () => {
  it("Hover the elements and check if tool tips appear", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.toolTips);
    ToolTips.hoverAndVerify();
  });
});
