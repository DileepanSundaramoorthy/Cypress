class Leave {
    leaveBtn = ".oxd-text.oxd-text--span.oxd-main-menu-item--name:contains('Leave')";
    calendarIcon = "(//*[@class='oxd-icon bi-calendar oxd-date-input-icon'])[1]"; // Updated to XPath
    downfillBtn = "//*[@class='oxd-calendar-selector-month-selected']";
    monthName = ".oxd-calendar-dropdown--option";
    selectedMonth = ".oxd-calendar-selector-month-selected";

    selectLeaveBtn() {
        cy.get(this.leaveBtn).click();
    }

    selectCalendarIconBtn() {
        cy.xpath(this.calendarIcon).click(); // Use cy.xpath for the XPath selector
    }

    selectDownfillBtn() {
        cy.xpath(this.downfillBtn).click();
    }

    selectMonth(monthName) {
        this.selectDownfillBtn();
        cy.contains(this.monthName, monthName).click();
    }

    getSelectedMonth() {
        return cy.get(this.selectedMonth);
    }
}

export default Leave;
