///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { BrokenLinksImages } from "../../support/pages/elements/brokenLinksImages";
import { path } from "../../support/data/globalElements";

describe("Broken Links and Images", () => {
  it("Links and Images", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.brokenLinksImages);
    BrokenLinksImages.verifyValidImage();
    BrokenLinksImages.verifyBorkenImage();
    BrokenLinksImages.verifyValidLink();
  });
});
