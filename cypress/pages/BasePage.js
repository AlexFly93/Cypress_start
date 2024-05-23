export class BasePage {
  

  signUpBtn() {
    return cy.xpath(`//button[@class="hero-descriptor_btn btn btn-primary"]`);
  }

  nameInput() {
    return cy.xpath(`//input[@name="name"]`);
  }

  lastNameInput() {
    return cy.xpath(`//input[@name="lastName"]`);
  }

  emailInput() {
    return cy.xpath(`//input[@name="email"]`);
  }

  passwordInput() {
    return cy.xpath(`//input[@name="password"]`);
  }

  repeatPasswordInput() {
    return cy.xpath(`//input[@name="repeatPassword"]`);
  }

  registerButton() {
    return cy.xpath(`//button[@class="btn btn-primary"]`);
  }

  userNavDropdown() {
    return cy.xpath(`//button[@id="userNavDropdown"]`);
  }

  profileLink() {
    return cy.xpath(`//a[@routerLink="/panel/profile"]`);
  }

  profileName() {
    return cy.xpath(`//p[contains(@class, "profile_name")]`);
  }

  garageHeaderBtn(){
    return cy.xpath(`a[@routerlink="/panel/garage"']`)
  }

  fuelExpensesHeaderBtn(){
    return cy.xpath(`a[@routerlink="/panel/expenses"']`)
  }

  instructionsHeaderBtn(){
    return cy.xpath(`a[@routerlink="/panel/instructions"']`)
  }

  logoFooterBtn(){
    return cy.xpath(`//a[@class='footer_logo']`)
  }

  textInFooter(){
    return cy.xpath(`//p[@data-sider-select-id="00dee962-10a3-46bc-90b7-a9bfa86c6490"]`)
  }

  copyrightInFooter(){
    return cy.xpath(`//p[normalize-space()='© 2021 Hillel IT school']`)
  }

  clickSignUpButton() {
    this.signUpBtn().click();
  }

  fillRegistrationForm(name, lastName, email, password) {
    this.nameInput().type(name);
    this.lastNameInput().type(lastName);
    this.emailInput().type(email);
    this.passwordInput().type(password);
    this.repeatPasswordInput().type(password);
  }

  submitRegistrationForm() {
    this.registerButton().click();
  }

  validateSuccessfulRegistration(name, lastName) {
    cy.url().should("include", "/garage");
    this.userNavDropdown().click();
    this.profileLink().click();
    this.profileName().should("contain.text", `${name} ${lastName}`);
  }
}


