///<reference types="cypress"/>
import RegistrationPage from '../PageObjects/RegistrationPage'

describe('Test Suite', function() {

    beforeEach(function(){
    
        cy.fixture('example.json').then(function(data)
        {
          this.data = data
          
        })
      
      })

    it('New user Registration Page', function(){

        const rp=new RegistrationPage()
        rp.visit()
        rp.fillFirstname(this.data.firstname)
        rp.fillLastname(this.data.lastname)
        rp.fillUsername(this.data.username)
        rp.fillUsernameconf(this.data.username)
        rp.fillPassword(this.data.password)
        rp.fillpwdconf(this.data.password)
        

        rp.clicktou()
        rp.clickupdates()
        rp.clicksignIn()
   
        cy.wait(5000)

        cy.title().should('eq','Sky Login')
        
        cy.wait(5000)

        //cy.get('.tab-content-inner').should('be.visible').should('be.eq','AN EMAIL HAS BEEN SENT TO YOUR REGISTERED EMAIL ADDRESS')
        cy.get('.tab-content-inner').should('be.eq','AN EMAIL HAS BEEN SENT TO YOUR REGISTERED EMAIL ADDRESS')
        
        cy.wait(5000)

        cy.get('.tab-content-inner').should('be.visible').should('be.eq','To complete your registration just click on the activation link in this email.')


        //cy.get('.tab-content-inner').should('contain.text','To complete your registration just click on the activation link in this email.')

       })

       /*it('Already existing user', function(){

        const rp1=new RegistrationPage()
        rp1.visit()
        rp1.fillFirstname(this.data.firstname)
        rp1.fillLastname(this.data.lastname)
        rp1.fillUsername(this.data.username)
        rp1.fillUsernameconf(this.data.username)
        rp1.fillPassword(this.data.password)
        rp1.fillpwdconf(this.data.password)
        

        rp1.clicktou()
        rp1.clickupdates()
        rp1.clicksignIn()
   
        cy.wait(5000)

        cy.title().should('eq','Sky Login')
        
        cy.wait(5000)
    
       //cy.get('.error-inner>p-inner').contains('This account already exists. Please log in here or click here to retrieve your password.')
        
        cy.get('.error-inner>p').should('contain.text','This account already exists. Please log in here or click here to retrieve your password.')
    })*/
    
})
    