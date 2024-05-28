import { basePage } from "../pages/BasePage";
import { testEnv } from "../testData/environments";
import { user } from "./../testData/users";

describe("SignIn flow", () => {
  beforeEach(() => {
    randomEmail = generateRandomEmail();
    cy.visit(testEnv);
  });

  it("successfull SignIn", () => {
    basePage.clickSignUpButton();
    basePage.fillRegistrationForm(
      user.name,
      user.lastName,
      user.randomEmail,
      user.password
    );
    basePage.submitRegistrationForm();
    basePage.validateSuccessfulRegistration(user.name, user.lastName);
  });
});
