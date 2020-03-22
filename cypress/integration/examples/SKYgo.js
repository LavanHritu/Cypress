describe('Test Suite', function() {

beforeEach(function(){

  cy.fixture('example.json').then(function(data)
  {
    this.data = data
    
  })

})


  /*it('Verify the title of the page', function()
   {
    cy.viewport(1024, 768)
    cy.visit('https://www.skygo.co.nz/')
    cy.wait(5000)
    cy.title().should('eq','Home | Sky Go')
 
     })*/

  it('New user Register with SKY', function()
   {

    cy.visit('https://skyaccess.skytv.co.nz/login-registration/#!/register?skin=isky')
    
    cy.get('input[name=firstname]').should('be.visible').should('be.enabled').type(this.data.firstname)

    cy.get('input[name=lastname]').should('be.visible').should('be.enabled').type(this.data.lastname)

    cy.get('input[name=username]').should('be.visible').should('be.enabled').type(this.data.username)

    cy.get('input[name=usernameconf]').should('be.visible').should('be.enabled').type(this.data.username)

    cy.get('input[name=password]').should('be.visible').should('be.enabled').type(this.data.password)

    cy.get('input[name=passwordconf]').should('be.visible').should('be.enabled').type(this.data.password)

    cy.get('input[name=tou]').click()

    cy.get('input[name=updates]').click()

    cy.get('button[type="submit"]').click()

    cy.title().should('eq','Sky Login')

    cy.get('.tab-content-inner').should('contain.text','AN EMAIL HAS BEEN SENT TO YOUR REGISTERED EMAIL ADDRESS')
    
    cy.get('.tab-content-inner').should('contain.text','To complete your registration just click on the activation link in this email.')
  })

  it('Register with SKY, Checking already exist user', function()
   {

    cy.visit('https://skyaccess.skytv.co.nz/login-registration/#!/register?skin=isky')
    
    cy.get('input[name=firstname]').should('be.visible').should('be.enabled').type(this.data.firstname)

    cy.get('input[name=lastname]').should('be.visible').should('be.enabled').type(this.data.lastname)

    cy.get('input[name=username]').should('be.visible').should('be.enabled').type(this.data.username)

    cy.get('input[name=usernameconf]').should('be.visible').should('be.enabled').type(this.data.username)

    cy.get('input[name=password]').should('be.visible').should('be.enabled').type(this.data.password)

    cy.get('input[name=passwordconf]').should('be.visible').should('be.enabled').type(this.data.password)

    cy.get('input[name=tou]').click()

    cy.get('input[name=updates]').click()

    cy.get('button[type="submit"]').click()

    cy.wait(5000)

    cy.get('.error-inner>p').should('contain.text','This account already exists')
    
    
  })
})