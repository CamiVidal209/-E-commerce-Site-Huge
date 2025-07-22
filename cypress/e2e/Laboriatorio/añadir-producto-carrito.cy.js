/// <reference types="cypress" />
import { elements } from '../../support/elements'

describe('Añadir producto al carrito', () => {
  it('debería mostrar el producto en el carrito', () => {
    cy.visitarProductoYAgregarAlCarrito()

    cy.get(elements.listaCarrito)
      .should('contain.text', 'Bandas Elásticas de Resistencia')
  })
})


