///<reference types='cypress'/>
import {path,text}from '../../data/elements/radioButton'

export class RadioButton{

    static selectYesOption(){
        cy.get(path.yesButton).click( {force: true})
        
    }
    static verifyYesOption(){
        cy.get(path.output).contains(text.yes)
        
    }

    static selectImpressiveOption(){
        cy.get(path.impressiveButton).click( {force: true})
    }

    static verifyImpressiveOption(){
        cy.get(path.output).contains(text.impressive)
    }

    static verifyNoOptionDisabled(){
        cy.get(path.noButton).should('be.disabled')
    }

}
