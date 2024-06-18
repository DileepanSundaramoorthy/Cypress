class BasePage {
    visit(url) {
        cy.visit(url);
    }

    getTitle() {
        return cy.title();
    }

    getUrl() {
        return cy.url();
    }

    clickElement(selector) {
        cy.get(selector).click();
    }

    enterText(selector, text) {
        cy.get(selector).type(text);
    }

    getElement(selector) {
        return cy.get(selector);
    }
}

export default BasePage;
