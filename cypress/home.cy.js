describe('My First Test', () => {
  it('Does not do much!', () => {
    // Open the URL
    cy.visit('http://127.0.0.1:5500/index.html');
    // Get header // check existence // check if contains text // checks text against given text
    cy.get("h1").should("exist").contains("box").should("have.text", "Sandbox");
  })
})