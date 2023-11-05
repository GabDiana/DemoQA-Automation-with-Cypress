const { path, text } = require("../../data/widgets/toolTips");

export class ToolTips {
  
  static hoverAndVerify() {
    cy.get(path.hoverMeBth).trigger("mouseover");
    cy.get(path.toolTipBtn).should("exist");
    cy.get(path.toolTipInner).contains(text.hoverMeBth);
    cy.get(path.hoverMeBth).trigger("mouseout");

    cy.get(path.hoverMeTextarea).trigger("mouseover");
    cy.get(path.toolTipTextarea).should("exist");
    cy.get(path.toolTipInner).contains(text.hoverMeTextarea);
    cy.get(path.hoverMeTextarea).trigger("mouseout");

    cy.get(path.contraty).trigger("mouseover");
    cy.get(path.toolTipContraty).should("exist");
    cy.get(path.toolTipInner).contains(text.contraty);
    cy.get(path.contraty).trigger("mouseout");

    cy.get(path.section11032).trigger("mouseover");
    cy.get(path.toolTipSection11032).should("exist");
    cy.get(path.toolTipInner).contains(text.section11032);
    cy.get(path.section11032).trigger("mouseout");
  }
}
