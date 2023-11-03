///<reference types="cypress"/>
const data = require('./login-page-data')

describe('signUp flow',()=>{
    
    it('email verification',()=>{
        cy.clearAllLocalStorage()
        cy.clearAllCookies()
        cy.clearAllSessionStorage()
        cy.visit("https://signup.celonis.com/ui/sign-up/get-started")
        cy.get('#onetrust-accept-btn-handler',{timeout:2000}).click()
        cy.get('#ce-input-0').type(data.emailAdress)
        cy.get('div.layout__form-wrapper > form > button').click()
        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })
        //cy.contains('Check your inbox',{timeout:15000})
        cy.mailosaurGetMessage(data.serverId, {
            //sentTo: emailAdress --replace after fixing rechapcha
            sentFrom:"no-reply@celonis.cloud"
          }).then(email => {
                cy.log(email.subject)
                let completeRegistrationLink
                expect(email.subject).to.equal('Complete your registration for Celonis')
                console.log(email.html.links.length)
                completeRegistrationLink = email.html.links[2].href
                console.log(completeRegistrationLink.text)
                cy.visit(completeRegistrationLink)
        })
    })

    it('complete the registration form',()=>{
        cy.on('uncaught:exception', (err, runnable) => {

            return false

        })
        cy.get(data.firstNamePath).type(data.firstName)
        cy.get(data.lastNamePath).type(data.lastName)
        cy.get(data.passwordPath).type(data.password)
        cy.xpath(data.whatWouldYouLikeToDoPath).click()
        cy.get(data.whatWouldYouLikeToDoOtherPath).click()
        cy.xpath(data.seniorityPath).click()
        cy.get(data.seniorityOtherPath).click()
        cy.xpath(data.businessFunctionPath).click()
        cy.get(data.businessFunctionOtherPath).click()
        cy.get(data.companyNamePath).type(data.companyName)
        cy.xpath(data.countryPath).click()
        cy.get(data.countryGermanyPath).click()
        cy.get(data.phonePath).type(data.phone)
        //cy.get(data.completeAccountSetupPath).wait(5000).click()
       
    })

})