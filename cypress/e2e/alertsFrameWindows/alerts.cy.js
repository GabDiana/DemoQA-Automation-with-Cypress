///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Alerts } from "../../support/pages/alertsFrameWindows/alerts";
import { path } from "../../support/data/globalElements";

describe("Alerts", () => {
  it("Click on buttons to see the alerts", () => {
    Navigate.navigateToPage(
      path.menu.alertsFrameWindows,
      path.alertsFrameWindows.alerts
    );
    Alerts.clickAndVerifyInstantAlert();
    Alerts.clickAndVerifyDelayedAlert();
    Alerts.clickAndVerifyConfirmBox();
    Alerts.clickAndVerifyPromptBox();
  });
});
