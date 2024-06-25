describe("Api testing", ()=>{

const querypara ={page:2}

it('query parameters', ()=>{
   cy.request({

               method:"GET",
               url: "https://reqres.in/api/users",
               qs:querypara     
   })
            .then((response)=>{
             expect(response.status).to.eq(200);
             expect(response.body.page).to.eq(2);
             expect(response.body.data).has.length(6);
             expect(response.body.data[1]).have.property('id',8);
             expect(response.body.data[1]).has.property('last_name', 'Ferguson');

          


            })


})




})