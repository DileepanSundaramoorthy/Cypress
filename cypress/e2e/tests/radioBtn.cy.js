///<reference types ="cypress"/>

describe ("check UI Elements",()=>{
  it.skip("check Radio Buttons",()=>{
   cy.visit("https://testautomationpractice.blogspot.com/")
   cy.get("input#male").should('be.visible')
   cy.get("input#female").should('be.visible')
   cy.get("input#male").check().should('be.checked')
   cy.get("input#female").should('not.be.checked')
  

  })

  it.skip("check box Buttons",()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("input#sunday").should('be.visible')
    cy.get("input#sunday").check().should('be.checked')
    cy.wait(5000)
    cy.get("input#sunday").uncheck().should('not.be.checked')
    cy.wait(5000)

    //muliple check box selected
    cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')
    cy.wait(5000)
    cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')
    cy.wait(5000)
    //here we can check the first checkbox and last check box by using the 
    //.first.check and .last.check
    cy.get("input.form-check-input[type='checkbox']").first().check()

 
   })
     

   it('DropDown ', ()=>{
    cy.visit("https://testautomationpractice.blogspot.com/")
    cy.get("select#country").select('india').should('have.value', 'india')
    cy.wait(5000)


   })


   it.only ('auto suggests dropdown',()=>{

    cy.visit("https://www.flipkart.com/")
    cy.get("input.Pke_EE").type('cypress')
    //contains method part of assertion
    cy.get('.AgOexi').contains('cypress plant').click()


   })


})