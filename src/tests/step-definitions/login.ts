import {
    Given,
    When,
    Then,
  } from "@cucumber/cucumber";

  import { Page, Browser, chromium, expect } from "@playwright/test";

  Given('A web browser is at the saucelabs login page', async function () {
    this.browser = await chromium.launch({headless: false});
    this.page = await this.browser.newPage();
    await this.page.goto('https://www.saucedemo.com/');
  });

  When('A user enters the username {string}, the password {string}, and clicks on the login button', async function (username: string, password: string) {
    await this.page.fill('input[data-test="username"]', username);
    await this.page.fill('input[data-test="password"]', password);
    await this.page.click('input[data-test="login-button"]');
  }); 

  Then('the url will contains the inventory subdirectory', async function () {
    await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html');
  });