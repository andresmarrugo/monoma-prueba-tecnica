describe('ver el perfil del usuario', () => {
  it('incia session', () => {
    cy.visit('/')
    cy.get('#email').type("usuario1@example.com")
    cy.get('#password').type("contraseña1")
    cy.get('form').submit()
    cy.get('#menu-btn').click()
    cy.get('[href="/profile"]').click()
    cy.get('.text-2xl').contains("Andres Marrugo")
  })

})