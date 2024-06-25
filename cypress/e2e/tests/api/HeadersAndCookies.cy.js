describe("Api Testing",()=>{
    let autoToken=null;
    before("creating new order",()=>{

        cy.response({
 
             method:'POST',
             url:'https://simple-books-api.glitch.me/api-clients/',
             headers:{
                     'Content-Type': 'application/json'
                                   },
              body:{
                  clinentName:'asd',
                  clientEmail:Math.random().toString(6).substring()+"@gmail.com"
 
              }                                
 
        }).then((response)=>{
             autoToken=response.body.accessToken;
 
        })
 
    });


before("creating new order",()=>{

       cy.response({

            method:'POST',
            url:'https://simple-books-api.glitch.me/orders/',
            headers:{
                    'Content-Type': 'application/json',
                    'Authorization':'Bearer'+autoToken
                                  },
             body:{
                 "bookId":1,
                 "customerName":"xyzabc"

             }                                

       }).then((response)=>{
         expect(response.status).to.eq(201)
         expect(response.body.created).to.eq(true)

       });

})


})



