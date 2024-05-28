import { basePage } from "./../pages/BasePage";

export class GeneralSteps {
  login(email, password, env) {
    cy.visit(env);
    basePage.SignInBtn().click();
    basePage.emailInput().fill(email);
    basePage.passwordInput().fill(password);
    basePage.submitButton().click();
  }

  logout() {
    basePage.userNavDropdown().click();
    basePage.logOutBtn().click();
  }
}
