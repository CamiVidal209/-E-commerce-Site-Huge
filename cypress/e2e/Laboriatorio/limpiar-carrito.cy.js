/// <reference types="cypress" />
import { elements } from '../../support/elements'

describe('Flujo de compra - Añadir y vaciar carrito', () => {
  it('añade un producto al carrito y luego lo vacía correctamente', () => {
    cy.visitarProductoYAgregarAlCarrito()
    cy.get(elements.listaCarrito).should('contain.text', 'Bandas Elásticas de Resistencia')
    cy.vaciarCarrito()
  })
})