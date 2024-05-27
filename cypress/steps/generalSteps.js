import { BasePage } from "./../pages/BasePage";
const basePage = new BasePage();

export class GeneralSteps {
  login(email, password) {
    basePage.SignInBtn().click();
    basePage.emailInput().fill(email);
    basePage.passwordInput().fill(password);
    basePage.submitButton().click();
  }

  logout() {
    basePage.logOutBtn().click();
  }
}
