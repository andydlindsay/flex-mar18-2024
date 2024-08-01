describe('tests for Cypress', () => {

  it('can check if true equals true', () => {
    expect(true).to.equal(true);
  });

  it('can visit the homepage', () => {
    cy.visit('http://localhost:8765/')
  });

});
