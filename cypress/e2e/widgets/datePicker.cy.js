///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { DatePicker } from "../../support/pages/widgets/datePicker";
import { path } from "../../support/data/globalElements";

describe("Date Picker", () => {
  it("Select data and verify the output", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.datePicker);
    DatePicker.selectDateAndVerify();
    DatePicker.selectDateTimeAndVerify();
  });
});
