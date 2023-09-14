describe('prueba de signout', () => {
  it('iniciar session y cerrar', () => {
    cy.visit('/')
    cy.get('#email').type("usuario1@example.com")
    cy.get('#password').type("contraseña1")
    cy.get('form').submit()
    cy.get('#menu-btn').click()
    cy.get('[href="/api/auth/signout"]').click()
    cy.get('#email')
  })
})