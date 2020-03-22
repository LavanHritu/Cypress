///<reference types="cypress"/>
import LandingPage from '../PageObjects/LandingPage'

describe('Test Suite', function() {

    before(function(){
    
      cy.fixture('example.json').then(function(data)
      {
        this.data = data
        
      })
    
    })

    it('Sky Landing page', function(){

        const lp=new LandingPage()
        lp.visit()
        cy.wait(5000) // wait
        cy.title().should('eq','SKY | Watch the Best Entertainment, Sports, Movies & TV Shows')

        /*cy.wait(5000)
        lp.clickLink()       
        
        cy.log("SignIn/Reg link is clicked")

        cy.wait(5000)
        cy.title().should('eq','Sky Login')*/

        //lp.clickReg() Error is throwing while clicking Reg tab

               
       })
    
})
    