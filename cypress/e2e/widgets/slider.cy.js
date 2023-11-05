///<reference types="cypress"/>
import { Navigate } from "../../support/pages/globalElements";
import { Slider } from "../../support/pages/widgets/slider";
import { path } from "../../support/data/globalElements";

describe("Slider", () => {
  it("Move the slider and check the value", () => {
    Navigate.navigateToPage(path.menu.widgets, path.widgets.slider);
    Slider.moveSliderAndVerifyTheOutput();
  });
});
