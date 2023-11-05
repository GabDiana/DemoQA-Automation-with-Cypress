///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { SelectMenu } from "../../support/pages/widgets/selectMenu";
import { path } from "../../support/data/globalElements";

describe("Select Menu", () => {
  it("Select menues and verify", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.selectMenu);
    SelectMenu.selectValueAndVerify();
    SelectMenu.selectOneAndVerify();
    SelectMenu.oldStileMenuVerify();
    SelectMenu.multipleDropdownVerify();
    SelectMenu.multiSelectVerify();
  });
});
