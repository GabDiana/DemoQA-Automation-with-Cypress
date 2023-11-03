///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { ModalDialogs } from "../../support/pages/alertsFrameWindows/modalDialogs";
import { path } from "../../support/data/globalElements";

describe("Modal Dialogs", () => {
  it("Open Modal and verify its content", () => {
    Navigate.navigateToPage(
      path.menu.alertsFrameWindows,
      path.alertsFrameWindows.modalDialogs
    );
    ModalDialogs.verifySmallModal();
    ModalDialogs.verifyLargeModal();
  });
});
