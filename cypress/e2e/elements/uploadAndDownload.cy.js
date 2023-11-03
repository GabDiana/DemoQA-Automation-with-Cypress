///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { UploadAndDownload } from "../../support/pages/elements/uploadAndDownload";
import { path } from "../../support/data/globalElements";

describe("Download and Upload filed", () => {
  it("Download sampleFile and upload it", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.uploadAndDownload);
    UploadAndDownload.downloadFile();
    UploadAndDownload.uploadFile();
  });
});
