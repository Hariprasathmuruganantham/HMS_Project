# Hospital Management System (HMS) Automation Framework

## Overview

This project is an end-to-end automation testing framework developed using **Playwright with JavaScript** for the Hospital Management System (HMS). The framework follows the **Page Object Model (POM)** design pattern to ensure maintainability, scalability, and reusability.

The framework supports multiple environments, generates HTML and Allure reports, and can be integrated with Jenkins for Continuous Integration and Continuous Delivery (CI/CD).

---

## Tech Stack

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Jenkins
- Git & GitHub
- Allure Report
- Playwright HTML Report
- Dotenv
- npm

---

## Project Structure

```
HMS_Project/
│
├── tests/                    # Test scripts
├── POM/                      # Page Object classes
├── Fixtures/                 # Test fixtures
├── Utils/                    # Utility methods
├── Storage/                  # Storage state files
├── TestData/                 # Test data
├── playwright.config.js      # Playwright configuration
├── global-setup.js           # Global setup
├── package.json
├── package-lock.json
├── .env              # Sample environment variables
├── jenkinsFile               # Jenkins Pipeline
├── allure-results/
├── allure-report/
└── playwright-report/
```

---

## Prerequisites

Install the following software:

- Node.js (Latest LTS)
- Visual Studio Code
- Git
- Java (Required for Allure)
- Jenkins (Optional for CI/CD)

---

## Installation

Clone the repository

```bash
git clone <repository-url>
```

Navigate to the project

```bash
cd HMS_Project
```

Install dependencies

```bash
npm install
```

Install Playwright browsers

```bash
npx playwright install
```

---

## Environment Configuration

Create a `.env` file in the project root.

Example:

```env
BASE_URL=http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/
USER_LOGIN_URL=http://49.249.29.4:8081/TestServer/Build/Hospital_Doctor_Patient_Management_System/hms/user-login.php

ADMIN_USERNAME=admin
ADMIN_PASSWORD=password

PATIENT_USERNAME=patient
PATIENT_PASSWORD=password
```

> **Important:** Do not commit the `.env` file. Add it to `.gitignore`.

---

## Running Tests

Run all tests

```bash
npx playwright test
```

Run a specific test file

```bash
npx playwright test tests/login.spec.js
```

Run in headed mode

```bash
npx playwright test --headed
```

Run in debug mode

```bash
npx playwright test --debug
```

Run a specific test by name

```bash
npx playwright test -g "Patient Login"
```

---

## Playwright HTML Report

Generate automatically after execution.

Open the report

```bash
npx playwright show-report
```

---

## Allure Report

Install

```bash
npm install -D allure-playwright allure-commandline
```

Run tests

```bash
npx playwright test
```

Generate report

```bash
npx allure generate allure-results --clean
```

Open report

```bash
npx allure open
```

Or

```bash
npx allure serve allure-results
```

---

## Jenkins Integration

The project includes a Jenkins Pipeline using a `Jenkinsfile`.

Pipeline stages include:

- Checkout
- Install Dependencies
- Install Playwright Browsers
- Execute Tests
- Publish HTML Report
- Publish Allure Report
- Archive Artifacts
- Email Notification

---

## Reports

### Playwright HTML Report

- Execution Summary
- Screenshots
- Videos
- Trace Viewer
- Console Logs

### Allure Report

- Dashboard
- Suites
- Features
- Stories
- Categories
- Timeline
- Graphs
- Attachments
- Execution History (when configured)

---

## Framework Features

- Page Object Model (POM)
- Environment-based execution
- Global Setup
- Storage State Authentication
- Parallel Execution
- Retry Mechanism
- HTML Reporting
- Allure Reporting
- Jenkins CI/CD Integration
- Email Notifications
- Screenshot & Trace Capture
- Configurable Test Execution

---

## Git Commands

Clone repository

```bash
git clone <repository-url>
```

Create branch

```bash
git checkout -b feature/branch-name
```

Pull latest changes

```bash
git pull origin main
```

Push changes

```bash
git add .
git commit -m "Commit message"
git push origin feature/branch-name
```

---

## Best Practices

- Follow the Page Object Model design pattern.
- Keep test data separate from test scripts.
- Store reusable methods in utility classes.
- Never commit the `.env` file or credentials.
- Use descriptive test names.
- Commit code regularly with meaningful messages.

---

## Authors

- **Hariprasath M.** – Automation Test Engineer
- **Azmat** – Automation Test Engineer
- **Rudransh** -Automation Test Engineer

### Technologies

Playwright | JavaScript | Jenkins | Git | Manual Testing