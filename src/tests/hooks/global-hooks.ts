import { Before, After, BeforeAll, AfterAll } from "@cucumber/cucumber";
import { Browser, chromium } from "@playwright/test";

let browser: Browser;

// Hook global care se execută înaintea fiecărui scenario
Before(async function () {
  // Browser-ul va fi creat în step-ul specific dacă este necesar
});

// Hook global care se execută după fiecare scenario
After(async function () {
  // Închide browser-ul dacă există
  if (this.browser) {
    await this.browser.close();
    this.browser = null;
  }
});

// Hook-uri pentru întreaga suită de teste (opțional)
BeforeAll(async function () {
  console.log('Începem rularea testelor...');
});

AfterAll(async function () {
  console.log('Testele au fost finalizate.');
});