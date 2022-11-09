describe('Cypress First Tests', () => {
  it('interacts with email field', () => {
    cy.visit('https://example.cypress.io/commands/actions')
    // Visits Cypress example site
    cy.get(".action-email")
    // Gets .action-email class
    .should("exist")
    // Checks if it exists
    .type("junglejim4322@yahoo.com")
    // Enters test email
    .should("have.value", "junglejim4322@yahoo.com");
    // Checks for correct value
  })
  it('interacts with action button', () => {
    cy.get(".action-btn")
    // Gets .action-btn class
    .should("exist")
    // Checks if it exists
    .click();
    // Clicks the button!
  })
  it('interacts with action canvas', () => {
    cy.get("#action-canvas")
    // Gets #action-canvas id
    .should("exist")
    // Checks if it exists
    .click("topLeft")
    // Clicks at the top left of the canvas
    .click("bottomRight");
    // Clicks at the bottom left of the canvas
  })
})