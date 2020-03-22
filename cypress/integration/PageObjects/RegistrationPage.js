class RegistrationPage{

    visit()
    {
        cy.visit('https://skyaccess.skytv.co.nz/login-registration/#!/register')
    }

    fillFirstname(value)
    {
        const txtfirstname = cy.get('input[name=firstname]')
        txtfirstname.clear()
        txtfirstname.type(value)
        return this
       
        
    }

    fillLastname(value)
    {
        const txtlastname = cy.get('input[name=lastname]')
        txtlastname.clear()
        txtlastname.type(value)
        return this
       
        
    }

    fillUsername(value)
    {
        const txtusername = cy.get('[name=username]')
        txtusername.clear()
        txtusername.type(value)
        return this
       
        
    }

    fillUsernameconf(value)
    {
        const txtusernameconf = cy.get('input[name=usernameconf]')
        txtusernameconf.clear()
        txtusernameconf.type(value)
        return this
       
        
    }

    fillPassword(value)
    {
        const txtpwd = cy.get('[name=password]')
        txtpwd.clear()
        txtpwd.type(value)
        return this
      
        
    }

    fillpwdconf(value)
    {
        const txtpwdconf = cy.get('input[name=passwordconf]')
        txtpwdconf.clear()
        txtpwdconf.type(value)
        return this
       
        
    }

    clicksignIn()
    {
        const btnsigIn = cy.get('button[type="submit"]')
        btnsigIn.click()
    }

    clicktou()
    {
        const btntou = cy.get('input[name=tou]')
        btntou.click()
    }

    clickupdates()
    {
        const btnupdates = cy.get('input[name=updates]')
        btnupdates.click()
    }
 
}

export default RegistrationPage
