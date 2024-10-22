

describe('Handling Iframes using cypress', ()=>{


    it('Handling iframes using custom commands', ()=>{

        cy.visit('https://demoqa.com/');
        cy.wait(2000);
        
        // cy.get('.category-cards .card.mt-4.top-card').eq(2).click();
        // cy.get('.accordion .element-group .menu-list [id="item-3"]').contains("Nested Frames").click({force:true});
        // iframe.clear().type("Welcome to iframe");

          cy.getIframe1('#frame1Wrapper');
    })

    it.only('SDET iframe example', ()=>{

        cy.visit('https://the-internet.herokuapp.com/iframe');
        cy.getIframe2('#mce_0_ifr').clear().type("Welcome {ctrl+a}");
        cy.get('[aria-label="Bold"]').click();

    })


})