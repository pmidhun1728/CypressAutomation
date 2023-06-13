import 'cypress-xpath';

describe('Automation Exercise', () => {
  beforeEach(() => {
    // Code to execute before each test case goes here
    cy.visit('https://automationexercise.com/').gettitle;
    cy.get('a[href="/login"]').click(); 
    cy.get('input[data-qa="login-email"]').type('pmidhun1728@gmail.com');
    cy.get('input[placeholder="Password"]').click().type('Midhun@1994');
    cy.get('button[data-qa="login-button"]').click();
  });

  it('Verify Headers list', () => {
    cy.get('.shop-menu.pull-right').find('ul').each(($ul) => {
    const expectedNames = ['Home', 'Products', 'Carts', 'Logout', 'Delete Account', 'Test Cases', 'API Testing', ' Video Tutorials', 'Contact us'];   

  }); 
  
});

it('Adding Dresses to cart', () => {
  const expectedNames = ['Dress', 'Tops', 'Saree'];

  cy.xpath("//a[normalize-space()='Women']").click();

  cy.get("div[id='Women'] div[class='panel-body']").find('ul').each(($ul, index) => {
    const expectedName = expectedNames[index];

    cy.wrap($ul).should('contain', expectedName);
    cy.log(expectedName);
  });
});

});

