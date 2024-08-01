describe('tests for the input field', () => {

  beforeEach(() => {
    cy.visit('/');

    cy.get('.radius')
      .as('ourInputField');
  });

  it('can type into an input field', () => {
    cy.get('@ourInputField')
      .type('Carrie Underwood', { delay: 150 })
      .should('have.value', 'Carrie Underwood')
  });

  it('can handle backspace', () => {
    cy.get('@ourInputField')
      .type('Beee{backspace}ge{backspace}{backspace} Gees', { delay: 150 })
      .should('have.value', 'Bee Gees');
  });

});
