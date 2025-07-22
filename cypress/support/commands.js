import { elements } from './elements'

// añadir-producto-carrito commands
Cypress.Commands.add('visitarProductoYAgregarAlCarrito', () => {
  cy.visit('https://www.laboratoriodetesting.com/')
  cy.get(elements.enlaceMarcas).click()
  cy.contains(elements.nombreProducto).click()
  cy.contains(elements.botonAgregarAlCarrito).click()
  cy.get(elements.botonAbrirCarrito).click()
})

//limpiar-carrito commands
Cypress.Commands.add('vaciarCarrito', () => {
  cy.get(elements.botonVaciarCarrito).click()
  cy.get(elements.mensajeCarritoVacio).should('have.text', 'Total: $0.00')
})

//login commads
Cypress.Commands.add('realizarLogin', (correo, contraseña) => {
  cy.get(elements.botonLoginEnHeader).click()
  cy.get(elements.campoEmail).type(correo)
  cy.get(elements.campoPassword).type(contraseña)
  cy.get(elements.botonEnviarLogin).click()
})

//recuperar-negative commands
Cypress.Commands.add('irARecuperarPasswordSinCorreo', () => {
  cy.contains(elements.enlaceAcceder).click()
  cy.contains(elements.enlaceOlvidastePassword).click()
  cy.get(elements.botonEnviarSinCorreo).click()
})

//recuperar-positive commands
Cypress.Commands.add('recuperarPasswordConCorreo', (correo) => {
  cy.contains(elements.enlaceAcceder).click()
  cy.contains(elements.enlaceOlvidastePassword).click()
  cy.get(elements.botonEnviarSinCorreo).click()
  cy.get(elements.inputCorreoRecuperacion).type(`${correo}{enter}`)
})



