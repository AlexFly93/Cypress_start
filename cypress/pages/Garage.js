import { BasePage } from "./BasePage";

export class Garage extends BasePage {

  garageSideMenuButton(){
    return cy.xpath(`//a[@routerlink="garage"]`)
  }

  addCar(){
    return cy.xpath(`//button[@class='btn btn-primary']`)
  }

  brandDropdownMenu(){
    return cy.xpath(`//select[@id='addCarBrand']`)
  }

  modelDropdownMenu(){
    return cy.xpath(`//select[@id='addCarModel']`)
  }

  mileageInput(){
    return cy.xpath(`//input[@id='addCarMileage']`)
  }

  cancelButton(){
    return cy.xpath(`//button[normalize-space()='Cancel']`)
  }

  addCarSubmitionButton(){
    return cy.xpath(`//button[normalize-space()='Add']`)
  }

  editCarButton(){
    return cy.xpath(`//span[@class='icon icon-edit']`)
  }

  removeCarButton(){
    return cy.xpath(`//button[normalize-space()='Remove car']`)
  }

  updateMileageInput(){
    return cy.xpath(`//input[@name='miles']`)
  }

  updateMileageButton(){
    return cy.xpath(`//button[@type='submit']`)
  }

}