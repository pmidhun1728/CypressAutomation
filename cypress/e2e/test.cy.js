describe('My First Test', () => {

  it('Launch URL', () => {
    cy.visit('http://automationpractice.pl/index.php').gettitle;
   cy.get('#header_logo').click();

   cy.get('#block_top_menu > ul > li:nth-child(1) > a').trigger('mouseOver')
   .get('#block_top_menu > ul > li:nth-child(1) > ul > li:nth-child(1) > a').should('have.text', 'Tops').click;



  });
});