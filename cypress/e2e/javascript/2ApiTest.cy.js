
//Install code runner extension to avoid opening terminal multiple times.

describe('API testing using cypress', ()=>{

    it('API test1', ()=>{
        const getApi = cy.request('GET', 'https://www.bstackdemo.com/').then((response)=>{

            expect(response.status).to.eq(200)
          });
          cy.log(getApi);
          
    })

    it('POST API test2', ()=>{
        cy.request({
            method: 'POST',
            url:'https://reqres.in/api/users',
            body: 
            {
                "name": "Bingo",
                "job": "Team lead"
            }
        }).then((response) =>{

            expect(response.body.name).to.eq("Bingo");
            expect(response.statusText).to.eq("Created");

        })

    })

    it('PUT API test3', ()=>{

        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/2',
            body:
            {
                "name": "Angel",
                "job": "zion resident"
            }
        }).then((response)=>{
            expect(response.status).to.eq(200)
            expect(response.body.name).to.eq("Angel")
        })
    })

    it('DELETE API test4', ()=>{

        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/2'
        }).then((response)=>{
            expect(response.status).to.eq(204)
        })
    })
})

