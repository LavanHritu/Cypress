class LoginPage{

    visit()
    {
        cy.visit('https://skyaccess.skytv.co.nz/login-registration/#!/login')
    }

    fillUsername(value)
    {
        const txtusername = cy.get('[name=username]')
        txtusername.clear()
        txtusername.type(value)
        return this
       
        
    }

    fillPassword(value)
    {
        const txtpwd = cy.get('[name=password]')
        txtpwd.clear()
        txtpwd.type(value)
        return this
      
        
    }

    clicksignIn()
    {
        const btnsigIn = cy.get('input[type=submit]')
        btnsigIn.dblclick()
    }

}

export default LoginPage
