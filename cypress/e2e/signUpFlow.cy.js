import { BasePage } from "../pages/BasePage";

describe("SignIn flow", () => {
  const basePage = new BasePage()
  const name = "Alex";
  const lastName = "Fly";
  const password = "A1234567!a";
  let randomEmail;

  beforeEach(()=>{
    randomEmail = generateRandomEmail()
    cy.visit("https://guest:welcome2qauto@qauto2.forstudy.space/");
  })
  
  it("successfull SignIn", () => {
    basePage.clickSignUpButton();
    basePage.fillRegistrationForm(name, lastName, randomEmail, password)
    basePage.submitRegistrationForm()
    basePage.validateSuccessfulRegistration(name, lastName)
  });
});

function generateRandomEmail() {
  const timestamp = new Date().getTime();
  return `testuser${timestamp}@example.com`;
}
