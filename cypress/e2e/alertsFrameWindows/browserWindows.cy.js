///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { BrowserWindows } from "../../support/pages/alertsFrameWindows/browserWindows";
import { path } from "../../support/data/globalElements";

describe("Browser Windows", () => {
  it("Check that new tab or window opens ", () => {
    Navigate.navigateToPage(
      path.menu.alertsFrameWindows,
      path.alertsFrameWindows.browserWindows
    );
    BrowserWindows.clickAndVerifyNewTab();
    BrowserWindows.clickAndVerifyNewWindow();
    BrowserWindows.clickAndVerifyNewWindowMessage();
  });
});
