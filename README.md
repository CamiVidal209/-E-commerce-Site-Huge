#  E-commerce Site — Cypress Approach
The document outlines an "Automation challenge activity" for QAs at Huge, aiming to enhance their automation skills. The objective is to equip QAs to effectively contribute to projects by resolving a practical automation testing challenge. This is a mandatory activity for all QAs at Huge and is designed to be a realistic QA scenario emphasizing critical thinking, automation scripting, research, and ownership.

## Setup Requirements

Before getting started, make sure you have the following installed on your machine:

- [Node.js (recommended version: 18 or higher)](https://nodejs.org/)
- [Git](https://git-scm.com/)

You can verify your installation with:

```bash
node -v
npm -v
git --version
```

##  Installation

1. Clone this repository:

```bash
git clone https://github.com/ClaraERozo/automation-challenge.git
cd automation-challenge
```

2. Install the project dependencies:

```bash
npm install
```

3. Launch Cypress in interactive mode:

```bash
npx cypress open
```

##  Running the Tests

- **Interactive mode (recommended):**

```bash
npx cypress open
```

- **Headless mode:**

```bash
npx cypress run
```

## 📁 Project Structure

```
/cypress
  /e2e
    - scenario_1.cy.js
    - scenario_2.cy.js
  /support
    - e2e.js
cypress.config.js
package.json
README.md
```

