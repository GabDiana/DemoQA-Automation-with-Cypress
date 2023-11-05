///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { ProgressBar } from "../../support/pages/widgets/progressBar";
import { path } from "../../support/data/globalElements";

describe("Progress Bar", () => {
  it("Interact with progress bar", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.progressBar);
    ProgressBar.startProgressBarAndVeify();
  });
});
