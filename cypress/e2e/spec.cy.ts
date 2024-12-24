describe('book adding site', () => {
  it('valid input', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Log out').should('be.visible');
    cy.contains('Добро пожаловать test@test.com').should('be.visible');
  });
  it('invalid input', () => {
    cy.visit('/');
    cy.login(' ', ' ');
    cy.get('#pass')
      .then(($el) => {
        return $el[0].checkValidity();
      })
      .should('be.true');
  });
  it('adding a new book', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.newBook('Сказка', 'О заколдовном царе', 'cypress/fixtures/Screenshot_9-6.png', 'cypress/fixtures/unnamed.jpg', 'Тарас шевченко');
    cy.contains('Submit').click();
    cy.contains('Add to favorite').should('be.visible');
  });
  it('adding a book to favorites', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Favorites').click();
    cy.contains('Delete from favorite').should('be.visible');
  });
  it('download book', () => {
    cy.visit('/');
    cy.login('test@test.com', 'test');
    cy.contains('Тарас шевченко').click();
    cy.contains('Dowload book').should('be.visible');
  });
});
