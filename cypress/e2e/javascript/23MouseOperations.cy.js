require ('@4tw/cypress-drag-drop');
require('cypress-xpath');





describe('Mouse Operations', ()=>{

it('MouseHover', ()=>{

    cy.visit("https://demo.opencart.com/");
    cy.get('[class="nav-link dropdown-toggle"]').eq(0).trigger('mouseover').click();
    cy.get('a[href$="/mac"]').eq(0).should('be.visible');

})

it('RightClick', ()=>{

    cy.visit('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    cy.get('[class="context-menu-one btn btn-neutral"]').rightclick();
    cy.get('[class="context-menu-item context-menu-icon context-menu-icon-copy"]').should('be.visible');
})

it('Doubleclick', ()=>{

    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick');
    cy.getIframe2('#iframewrapper').find("button[ondblclick='myFunction()']").dblclick();

})

it('Drag and Drop', ()=>{

    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-3.html');
    
    cy.wait(3000);
    cy.get('#box6').drag('#box106', {force:true});
})

it.only('ScrollIntoView', () => {
    cy.visit('https://www.countries-ofthe-world.com/flags-of-asia.html', {
        failOnStatusCode: false // Prevent the test from failing if the page returns a non-2xx status code
    });

        cy.wait(30000);

       cy.xpath('(//table/tbody)[1]/tr[17]/td[1]').scrollIntoView({duration:3000});
});
});