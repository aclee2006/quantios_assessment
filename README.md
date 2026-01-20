# QA Assessment
A) Design and develop a simple automated successful login test for the website https://qainterview.netlify.app/

Install nodejs (v24.13.0) from https://nodejs.org/en/download.

Verify node version:

node -v # Should print "v24.13.0"

Verify npm version:

npm -v # Should print "11.6.2"

npm init playwright@latest

√ Do you want to use TypeScript or JavaScript? · TypeScript

√ Where to put your end-to-end tests? · e2e

√ Add a GitHub Actions workflow? (Y/n) · false

√ Install Playwright browsers (can be done manually via 'npx playwright install')? (Y/n) · true

√ C:\xxx\playwright.config.ts already exists. Override it? (y/N) · false

npx playwright test

B) Postman Collection

1. Open Postman
2. Click Import (top-left)
3. Choose File
4. Select [https://github.com/aclee2006/quantios_assessment/blob/main/Quantios.postman_collection.json](https://github.com/aclee2006/qa_assessment/blob/main/qa.postman_collection.json) file
5. Click Import
The collection will appear in the left sidebar.
