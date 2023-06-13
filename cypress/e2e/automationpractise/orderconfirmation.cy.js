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

    cy.get('#Women').find('ul').each(($ul, index) => {
      const expectedName = expectedNames[index];

      cy.wrap($ul).should('contain', expectedName);
      cy.log(expectedName);

      cy.get("a[href='/product_details/3']").click();
      cy.get("button[type='button']").click();
      cy.get(".btn.btn-success.close-modal.btn-block").click();
      cy.xpath("//a[normalize-space()='Cart']//i[@class='fa fa-shopping-cart']").click();
      cy.get("td[class='cart_description'] p").should('have.text', 'Women > Dress')
      cy.xpath("//a[normalize-space()='Proceed To Checkout']").click();

      cy.get('textarea[name="message"]').type('Thanks You');
      cy.xpath("//a[normalize-space()='Place Order']").click();
      cy.get("input[name='name_on_card']").type('Midhun Pavuluru');
      cy.get("input[name='card_number']").type('2345678976543');

      cy.get("input[placeholder='ex. 311']").type('321');
      cy.get("input[placeholder='MM']").type('12');
      cy.get("input[placeholder='YYYY']").type('2023');

      cy.get("#submit").click();

      cy.get("div[class='col-sm-9 col-sm-offset-1'] p").should('have.text', 'Congratulations! Your order has been confirmed!')
      cy.xpath("//a[normalize-space()='Download Invoice']").should('have.text', 'Download Invoice');
      cy.xpath("//a[normalize-space()='Continue']").click();
      






    });
  });

});

