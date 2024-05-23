import { BasePage } from "./BasePage";

export class FuelExpenses extends BasePage {

  fuelExpensesSideBarButton(){
    return cy.xpath(`a[@routerlink="expenses"`)
  }

  selectCarDropdown(){
    return cy.xpath(`//button[@id='carSelectDropdown']`)
  }

  addExpenseButton(){
    return cy.xpath(`//button[@class='btn btn-primary']`)
  }

  vehicleDropdown(){
    return cy.xpath(`//select[@id='addExpenseCar']`)
  }

  reportDateInput(){
    return cy.xpath(`//input[@id='addExpenseDate']`)
  }

  datePickerBtn(){
    return cy.xpath(`//button[@class='btn date-picker-toggle']`)
  }

  previousMonthArrow(){
    return cy.xpath(`//button[@title='Previous month']`)
  }

  nextMonthArrow(){
    return cy.xpath(`//button[@title='Next month']']`)
  }

  selectYearDropdown(){
    return cy.xpath(`//select[@title='Select year']`)
  }

  // selectDayNumber(){
  //   return cy.xpath(`//div[contains(text(),${number}]`)
  // }

  mileageInput(){
    return cy.xpath(`//input[@id='addExpenseMileage']`)
  }

  numberOfLitersInput(){
    return cy.xpath(`//input[@id='addExpenseLiters']`)
  }

  totalCostInput(){
    return cy.xpath(`//input[@id='addExpenseTotalCost']`)
  }

  cancelButton(){
    return cy.xpath(`//button[normalize-space()='Cancel']`)
  }
  
  addButton(){
    return cy.xpath(`//button[normalize-space()='Add']`)
  }

  deleteExpenseButton(){
    return cy.xpath(`//span[@class='icon icon-delete']`)
  }

  editExpenseButton(){
    return cy.xpath(`//span[@class='icon icon-edit']`)
  }

  confirmDeleteExpenseButton(){
    return cy.xpath(`//button[normalize-space()='Remove']`)
  }

  saveChangesButton(){
    return cy.xpath(`//button[normalize-space()='Save']`)
  }


}