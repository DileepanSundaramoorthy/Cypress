describe("HTTP Request", () => {

    it('Get call', () => {
      cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal', 200);
    });
  
    it("post call", () => {
      cy.request({
        method: 'POST',
        url: 'https://jsonplaceholder.typicode.com/posts/',
        body: {
          title: "Test Post",
          body: "This is post call",
          userId: 1
        }
      })
        .its('status')
        .should('equal', 201);
    });
  
    it("PUT call", () => {
      cy.request({
        method: "PUT",
        url: "https://jsonplaceholder.typicode.com/posts/1",
        body: {
          title: "Test Put",
          body: "This is PUt call",
          userId: 1,
          id: 1 
        }
      })
        .its('status')
        .should('equal', 200);
    });

    it("Delete call",()=>{
    cy.request(  {
            method:"DELETE",
            url:"https://jsonplaceholder.typicode.com/posts/1"
           
     } )
       .its('status')
       .should('equal', 200)
  

    });
  
  });
  