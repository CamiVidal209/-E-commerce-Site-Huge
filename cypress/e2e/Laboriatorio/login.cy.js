/// <reference types="cypress" />
import { elements } from '../../support/elements'

describe('Login en Laboratorio de Testing', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('debería iniciar sesión correctamente con credenciales válidas', () => {
    cy.realizarLogin('huge.test@gmail.com', 'Huge2025.')
    cy.get(elements.encabezado).should('contain.text', 'Mi Cuenta')
    cy.get(elements.encabezado).should('contain.text', 'Favoritos')
  })
})
