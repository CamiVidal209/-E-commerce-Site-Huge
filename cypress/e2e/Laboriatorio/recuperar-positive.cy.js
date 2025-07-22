/// <reference types="cypress" />
import { elements } from '../../support/elements'

describe('Recuperación de contraseña con correo válido', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería mostrar confirmación al ingresar un correo válido', () => {
    cy.recuperarPasswordConCorreo('huge.test@gmail.com')
    cy.get(elements.mensajePopupConfirmacion).should('contain.text', 'Token enviado')
  })
})
