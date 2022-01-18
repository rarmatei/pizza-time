describe('pizza-ui-elements: PizzaButton component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=pizzabutton--primary&args=disabled:false;label;'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to PizzaButton!');
    });
});
