///<reference types="cypress"/>
import LoginPage from '../PageObjects/LoginPage'

describe('Test Suite', function() {

    beforeEach(function(){
    
      cy.fixture('example.json').then(function(data)
      {
        this.data = data
        
      })
    
    })

    it('Login SKY page', function(){

        const lp=new LoginPage()
        lp.visit()
        lp.fillUsername(this.data.username)
      
        lp.fillPassword(this.data.password)
        

        lp.clicksignIn()
        
        cy.wait(7000)
        cy.title().should('eq','SKY | Watch the Best Entertainment, Sports, Movies & TV Shows')

       })
    
})
    