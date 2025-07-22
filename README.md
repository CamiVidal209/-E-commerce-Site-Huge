# 🛒 E-commerce Site — Cypress Automation

This repository contains the solution to a QA automation challenge based on a real e-commerce website:  
🔗 [https://www.laboratoriodetesting.com](https://www.laboratoriodetesting.com)

---

## 🧰 Setup Requirements

Before getting started, make sure the following tools are installed on your machine:

- [Node.js (version 18 or higher recommended)](https://nodejs.org/)
- [Git](https://git-scm.com/)

You can verify the installation by running:

```bash
node -v
npm -v
git --version
```

---

## 📦 Project Installation

1. Clone this repository:

```bash
git clone https://github.com/CamiVidal209/-E-commerce-Site-Huge.git
cd -E-commerce-Site-Huge
```

2. Install project dependencies:

```bash
npm install
```

3. Launch Cypress in interactive mode:

```bash
npx cypress open
```

---

## 🧪 Running the Tests

### ▶️ Interactive mode (recommended)

Open Cypress Test Runner:

```bash
npx cypress open
```

### ⚙️ Headless mode

Run tests directly in the terminal:

```bash
npx cypress run
```

---

## 📁 Project Structure

```
/cypress
  /e2e
    /Laboratorio                      
      - añadir-producto-carrito.cy.js     
      - limpiar-carrito.cy.js             
      - login.cy.js                      
      - recuperar-negative.cy.js          
      - recuperar-positive.cy.js          
  /fixtures                             
  /screenshots                          
  /support
    - commands.js                       
    - e2e.js                            
    - elements.js                       
.gitignore                              
Automation Strategy.pdf                 
cypress.config.js                       
package.json                            
package-lock.json                       
README.md                               
<<<<<<< HEAD
```
=======
```
>>>>>>> 172f7a59c01addce51df6a646d7154cadd8f8495
