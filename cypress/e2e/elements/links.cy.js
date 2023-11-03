///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Links } from "../../support/pages/elements/links";
import { path } from "../../support/data/globalElements";

describe("Links", () => {
  it("Following links will open new tab", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.links);
    Links.openHomePageNewTab();
  });

  it("Following links will send an api call", () => {
    Links.sendCreatedRequestAndVerifyUI();
    Links.sendNoContentRequestAndVerifyUI();
    Links.sendMovedRequestAndVerifyUI();
    Links.sendBadRequestAndVerifyUI();
    Links.sendUnauthorizedRequestAndVerifyUI();
    Links.sendForbiddenRequestAndVerifyUI();
    Links.sendNotFoundRequestAndVerifyUI();
  });
});
