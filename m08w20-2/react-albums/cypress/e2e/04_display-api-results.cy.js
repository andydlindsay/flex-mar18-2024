describe('tests for the api', () => {

  it('can display the results of an api request', () => {
    // visit the home page
    cy.visit('/');

    // set up our intercept and respond with hardcoded data
    cy.intercept('GET', '**/search*', { fixture: 'imagine-dragons' })
      .as('fetchImagineDragonsInfo');

    // find the input field and type in "imagine dragons"
    cy.get('.radius')
      .type('imagine dragons');

    // wait for the api request to resolve
    cy.wait('@fetchImagineDragonsInfo');

    // search the DOM for a particular album
    cy.contains('Mercury - Act 1');

    // uncheck the explicit checkbox
    cy.get('#Explicit')
      .uncheck();

    // make sure the explicit album no longer shows up
    cy.get('article.album')
      .should('not.contain', 'Origins (Deluxe Edition)');
  });

});