import Login from '../page-objects/Login';
import Leave from '../page-objects/Leave';

describe('Select Month from Leave Calendar', () => {
    let loginData;
    const loginPage = new Login();
    const leavePage = new Leave();

    before(() => {
        cy.fixture('liveUserTestData').then((data) => {
            loginData = data;
            cy.visit('/');
            loginPage.login(Cypress.env('username'), Cypress.env('password'), loginData.clickSubmitBtn);
        });
    });
    
    
    
    it('Should select Jun from Leave Calendar', () => {
        leavePage.selectLeaveBtn();
        leavePage.selectCalendarIconBtn();
        cy.wait(5000);
        cy.get(leavePage.downfillBtn).should('be.visible');
        // leavePage.selectDownfillBtn();
        // leavePage.selectMonth('Aug');
        
        // leavePage.getSelectedMonth().should('have.text', 'June');
    });

    it('Should add the Job Categorie and delete',()=>{
       
     

    })

    afterEach(() => {
        cy.log('Test completed');
    });
});