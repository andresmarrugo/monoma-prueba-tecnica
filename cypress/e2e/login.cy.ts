describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('#email').type("usuario1@example.com")
    cy.get('#password').type("contraseña1")
    cy.get('form').submit()
  })
})