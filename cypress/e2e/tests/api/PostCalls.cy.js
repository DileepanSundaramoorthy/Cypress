describe("api test post call types", () => {

    it("post call hard coded json object", () => {
  
      const requestBody = {
        tourist_name: "dileep",
        tourist_email: "dileep@gmail.com",
        tourist_place: "chennai"
      }
  
      cy.log('Making POST request')
      cy.request({
        method: "POST",
        url: "http://restapi.adequateshop.com/api/Tourist",
        body: requestBody
      }).then((response) => {
        cy.log('Response received')
        expect(response.status).to.eq(201)
        expect(response.body.tourist_name).to.eq("dileep")
        expect(response.body.tourist_email).to.eq("dileep@gmail.com")
        expect(response.body.tourist_place).to.eq("chennai")
      })
  
    })
  
  })
  