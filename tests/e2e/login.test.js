jest.setTimeout(20000); 

const { Builder, By, until } = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

describe('E2E - Connexion', () => {
  let driver;

  beforeAll(async () => {
    try {
      const options = new chrome.Options();
      options.addArguments('--headless');        
      options.addArguments('--disable-gpu');
      options.addArguments('--no-sandbox');       
      options.addArguments('--window-size=1280,800');

      driver = await new Builder()
        .forBrowser('chrome')
        .setChromeOptions(options)
        .build();
    } catch (err) {
      console.error('Erreur lors du lancement de Chrome :', err);
    }
  });

  afterAll(async () => {
    if (driver) {
      await driver.quit();
    }
  });

  it('Doit se connecter avec succès', async () => {
    await driver.get('http://localhost:3000/login');

    const emailInput = await driver.findElement(By.id('email'));
    await emailInput.sendKeys('admin@test.com');

    const passwordInput = await driver.findElement(By.id('password'));
    await passwordInput.sendKeys('password');

    const submitButton = await driver.findElement(By.css('button[type="submit"]'));
    await submitButton.click();

    await driver.wait(until.urlContains('/dashboard'), 10000);

    const url = await driver.getCurrentUrl();
    expect(url).toContain('/dashboard');
  });
});
