///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { NestedFrames } from "../../support/pages/alertsFrameWindows/nestedFrames";
import { path } from "../../support/data/globalElements";

describe("Nested Frames", () => {
  it("Navigate to the last Frame and check the text", () => {
    Navigate.navigateToPage(
      path.menu.alertsFrameWindows,
      path.alertsFrameWindows.nestedFrames
    );
    NestedFrames.verifyChildFrameContent();
  });
});
