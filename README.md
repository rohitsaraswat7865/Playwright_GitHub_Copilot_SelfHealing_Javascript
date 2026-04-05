# Playwright_MCP_Javascript

Automated browser testing suite using **Playwright MCP - Test Planner, Generator, Healer Agents**.

## Overview

This project contains demo for end-to-end automated test case for the Swag Labs e-commerce application. Tests are written using Playwright's testing framework and executed in headed mode for visibility during test runs. Refer - https://playwright.dev/docs/test-agents

**Test Generation**: Tests are automatically generated using the **Playwright MCP**, which records user interactions and generates reliable test code.

**Self-Healing**: The test suite also utilizes **Playwright Self-Healing Agent** to automatically fix broken locators, reducing maintenance overhead and improving test stability.

## 🤖 Test Generation Workflow

This project uses an **AI-powered test generation workflow** with Playwright Planner, Generator, Healer agents:

### How Tests Are Generated

1. **Test Planning**: Test scenarios and steps are defined in `specs/test-plan.md`
2. **Test Generation**: The **Playwright Test Generator Agent** reads the test plan and generates test code by:
   - Recording user interactions with the application
   - Identifying reliable selectors and locators
   - Creating test steps with proper assertions
   - Generating TypeScript test code in `tests/`

3. **Maintenance with Self-Healing**: The **Playwright Self-Healing Agents** automatically:
   - Monitor test failures due to broken locators
   - Suggest or apply locator updates
   - Maintain tests as the application changes
   - Reduce manual test maintenance overhead

### Generated Tests

All test files in the `tests/` directory were generated from the test scenarios defined in `specs/test-plan.md` using the Playwright Test Generator Agent.

Example: `test-plan.md` → `tests/login-and-verify.spec.ts` (auto-generated)

## 📋 Prerequisites

- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🚀 Getting Started

### Installation

1. Install project dependencies:
```bash
npm install
```

This will install:
- `@playwright/test` - Testing framework
- `@types/node` - TypeScript type definitions

2. Install Playwright browsers:
```bash
npx playwright install
```

3. Initialize Playwright Self-Healing Agents:
```bash
npx playwright init-agents --loop=vscode
```

The self-healing agents help automatically fix broken locators and improve test stability over time.

### Running Tests

Run all tests:
```bash
npx playwright test
```

Run tests:
```bash
npx playwright test --config=playwright.config.js
```

Run a single test file:
```bash
npx playwright test tests/login-and-verify.spec.ts --config=playwright.config.js
```

Run tests with headed browser (UI visible):
```bash
npx playwright test --headed
```

### Viewing Test Reports

View the HTML test report:
```bash
npx playwright show-report
```

## 📁 Project Structure

```
├── specs/                          # Test specification files
│   └── test-plan.md               # Swag Labs test plan
├── tests/                          # Test files
│   ├── login-and-verify.spec.ts   # Login and inventory verification test
│   └── seed.spec.ts               # Seed data setup file
├── playwright.config.js            # Playwright configuration
├── package.json                    # Project dependencies
└── README.md                       
```
<img width="1909" height="1020" alt="image" src="https://github.com/user-attachments/assets/4581e2c4-95af-430a-9464-2f6400eaec8f" />

## 📊 Test Reports

HTML reports are generated in the `playwright-report/` directory after test execution.

To view the latest report:
```bash
npx playwright show-report
```

