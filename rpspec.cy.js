describe('rock paper scissors', () => {
  it('access site', () => {
    cy.visit('../../rps/index.html')
  })
  it('validates page layout', () => {
    cy.get('h4').should("have.text","Your choice: Computer choice: Result: ")
    cy.get('#rock').should("have.text","Rock")
    cy.get('#paper').should("have.text","Paper")
    cy.get('#scissors').should("have.text","Scissors")
  })
  it('tests rock button', () => {
    cy.get('#rock').click() // Checks button can be clicked
    cy.get('#user-choice').contains('rock') // Checks that on button click, user-choice contains 'rock'
    cy.get('#com-choice').then(($com) => { // Gets com-choice value, feeds forward as $com
      if ($com.text().includes('rock')){ // On the condition that com-choice is 'rock'
        cy.get('#result').contains("It's a tie!") // ^ Check that the result is tie
      }
      else if ($com.text().includes('paper')){ // On condition com-choice is paper
        cy.get('#result').contains("Computer wins!") // ^ Check that result is computer win
      }
      else {
        cy.get('#result').contains("You win!") // Otherwise check that result is user win
      }
    })
  })
  it('tests paper button', () => { // Repeats lines 11-25, amended for paper
    cy.get('#paper').click()
    cy.get('#user-choice').contains('paper')
    cy.get('#com-choice').then(($com) => {
      if ($com.text().includes('paper')){
        cy.get('#result').contains("It's a tie!")
      }
      else if ($com.text().includes('scissors')){
        cy.get('#result').contains("Computer wins!")
      }
      else {
        cy.get('#result').contains("You win!")
      }
    })
  })
  it('tests scissors button', () => { // Repeats lines 11-25, amended for scissors
    cy.get('#scissors').click()
    cy.get('#user-choice').contains('scissors')
    cy.get('#com-choice').then(($com) => {
      if ($com.text().includes('scissors')){
        cy.get('#result').contains("It's a tie!")
      }
      else if ($com.text().includes('rock')){
        cy.get('#result').contains("Computer wins!")
      }
      else {
        cy.get('#result').contains("You win!")
      }
    })
  })
})
  