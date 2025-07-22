# 🛒 E-commerce Site — Cypress Automation

Este repositorio contiene la solución a un reto de automatización QA basado en un sitio de e-commerce real:  
🔗 [https://www.laboratoriodetesting.com](https://www.laboratoriodetesting.com)

---

## 🧰 Requisitos de configuración

Antes de comenzar, asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- [Node.js (versión 18 o superior)](https://nodejs.org/)
- [Git](https://git-scm.com/)

Puedes verificar las versiones instaladas con:

```bash
node -v
npm -v
git --version
```

---

## 📦 Instalación del proyecto

1. Clona este repositorio:

```bash
git clone https://github.com/CamiVidal209/-E-commerce-Site-Huge.git
cd -Ecommerce-Site-Huge
```

2. Instala las dependencias:

```bash
npm install
```

3. Abre Cypress en modo interactivo:

```bash
npx cypress open
```

---

## 🧪 Cómo ejecutar las pruebas

### ▶️ Modo interactivo (recomendado)

Abre la interfaz de Cypress y ejecuta los test desde allí:

```bash
npx cypress open
```

### ⚙️ Modo headless

Ejecuta todos los tests directamente desde la terminal:

```bash
npx cypress run
```

---

## 📁 Estructura del proyecto

```
/cypress
  /e2e               → Escenarios de prueba E2E
    - añadir-carrito.cy.js
    - login.cy.js
    - recuperar-password.cy.js
  /support
    - e2e.js         → Soporte y hooks globales
    - commands.js    → Comandos personalizados
    - elements.js    → Selectores reutilizables
cypress.config.js     → Configuración principal de Cypress
package.json          → Dependencias y scripts del proyecto
README.md             → Este archivo
```
