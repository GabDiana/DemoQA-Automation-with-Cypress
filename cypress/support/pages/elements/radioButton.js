///<reference types='cypress'/>
import {path,text}from '../../data/elements/radioButton'

export class RadioButton{

    static selectYesOption(){
        cy.get(path.yesButton).click()
        
    }
    static verifyYesOption(){
        cy.get(path.output).contains(text.yes)
        
    }

    static selectImpressiveOption(){
        cy.get(path.impressiveButton).click()
    }

    static verifyImpressiveOption(){
        cy.get(path.output).contains(text.impressive)
    }

    static verifyNoOptionDisabled(){
        cy.get(path.noButton).should('be.disabled')
    }

}
