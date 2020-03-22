class LandingPage{

    visit()
    {
        cy.visit('https://www.sky.co.nz/')
    }



    clickLink()
    {
        const lnkReg = cy.get('#portlet_iopaccountlinks_WAR_iopaccountportlet_INSTANCE_rn27hv1i8Z5p > div > div > div > div > div > ul > li > a > span')
        lnkReg.click()
    }

    clickReg()
    {
        const tabReg = cy.get(['ui-sref=register'])
        tabReg.click()

    }

}

export default LandingPage
