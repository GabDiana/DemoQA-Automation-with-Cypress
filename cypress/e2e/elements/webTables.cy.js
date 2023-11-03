///<reference types='cypress'/>
import { Navigate } from "../../support/pages/globalElements";
import { path } from "../../support/data/globalElements";
import { WebTables } from "../../support/pages/elements/webTables";

describe("Web Tables", () => {
  it("Add new row", () => {
    Navigate.navigateToPage(path.menu.elements, path.elements.webTables);
    WebTables.addNewRow();
    WebTables.verifyNewRow();
    WebTables.validateTheRegistrationForm();   
  });

  it("Edit new row", () => {
    WebTables.editOneRow();
    WebTables.verifyEditedRow();
  });

  it("Search", () => {
    WebTables.searchByFirstName();
    WebTables.searchByLastNaame();
    WebTables.searchByAge();
    WebTables.searchByEmail();
    WebTables.searchBySalary();
    WebTables.searchByDepartment();
  });

  it("Delete row", () => {
    WebTables.deleteOneRow();
    WebTables.verifyRowWasDeleted();
  });

  it("Pagination", () => {
    WebTables.selectNrOfRowsPerPageAndVerify();
    WebTables.addThreeRows();
    WebTables.verifyPreviousNextButtons();
  });
});
