///<reference types='cypress'/>

import { path, text } from "../../data/elements/uploadAndDownload";
import fs from "fs";

export class UploadAndDownload {
  static downloadFile() {
    cy.get(path.downloadBtn).invoke("removeAttr", "target").click();
    cy.readFile('cypress\\downloads\\sampleFile.jpeg').should('exist')
  }
  static uploadFile() {
    cy.fixture(text.uploadedFileName).as("file");
    cy.get(path.uploadBtn).selectFile("@file");
    cy.get(path.uploadedFile).contains(text.uploadedFileName)
  }
}
