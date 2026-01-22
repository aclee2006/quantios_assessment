# QA Assessment

This project demonstrates a simple QA automation setup using **Playwright** for UI testing and **Postman** for API testing.

## 1) Automated Login Test (Playwright)

This section explains how to set up and run a basic automated test that validates a **successful login** on:

https://qainterview.netlify.app/

### Prerequisites

Ensure **Node.js** is installed on your machine.

- Required version: **Node.js v24.13.0**
- Download from: https://nodejs.org/en/download

Verify the installation:

```bash
node -v
# Expected output: v24.13.0

npm -v
# Expected output: 11.6.2
```
Playwright Setup
Initialize Playwright in the project directory:

```bash
npm init playwright@latest
```
Choose the following options when prompted:

- Language: TypeScript
- Test directory: e2e
- GitHub Actions workflow: No
- Install Playwright browsers: Yes
- Override existing playwright.config.ts: No

This will create the Playwright project structure and install all required dependencies.

Running the Tests
To execute the automated login test, run:

```bash
npx playwright test
```
Playwright will launch the browser, perform the login flow, and display the test results in the terminal.

## 2) API Testing (Postman Collection)
This section explains how to import and run the provided Postman collection.

### Importing the Collection
1. Open Postman
2. Click Import (top-left corner)
3. Select File. Choose the following file:
https://github.com/aclee2006/qa_assessment/blob/main/qa.postman_collection.json
4. Click Import. The collection will appear in the left sidebar and is ready to be executed.
