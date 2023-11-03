///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Frames } from "../../support/pages/alertsFrameWindows/frames";
import { path } from "../../support/data/globalElements";

describe("Frames", () => {
  it("Check the text from the iFrames", () => {
    Navigate.navigateToPage(
      path.menu.alertsFrameWindows,
      path.alertsFrameWindows.frames
    );
    Frames.verifyFirstFrame();
    Frames.verifySecondFrame();
  });
});
