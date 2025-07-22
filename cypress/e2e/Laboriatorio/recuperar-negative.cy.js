/// <reference types="cypress" />
import { elements } from '../../support/elements'

describe('Recuperación de contraseña sin correo', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería mostrar mensaje de error al intentar recuperar sin ingresar correo', () => {
    cy.irARecuperarPasswordSinCorreo()
    cy.get(elements.mensajeValidacion).should('contain.text', 'Ingresa un correo válido')
  })
})
