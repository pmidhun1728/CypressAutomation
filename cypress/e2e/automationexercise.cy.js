import 'cypress-xpath';

describe('Automation Exercise', () => {
  beforeEach(() => {
    // Code to execute before each test case goes here
    cy.visit('https://automationexercise.com/').gettitle;
    cy.xpath('//*[text()=" Signup / Login"]').click();
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[2]').type('pmidhun1728@gmail.com');
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/input[3]').click().type('Midhun@1994');
    cy.xpath('//*[@id="form"]/div/div/div[1]/div/form/button').click();
  });

  it('Launch URL and Login', () => {
    cy.get('#shop-menu.pull-right').should('have.text', 'Products');

  });
});

