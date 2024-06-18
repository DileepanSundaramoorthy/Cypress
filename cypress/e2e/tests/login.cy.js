import Login from '../page-objects/Login';

describe('OrangeHRM Login', () => {
  let loginData;
  const ln = new Login();
  before(() => {
    cy.fixture('liveUserTestData').then((data) => {
      loginData = data;
    });
  });

  beforeEach(() => {
    cy.visit('/');
  });

  it('Should display correct title and URL', ()=>{
   
    cy.title().should('eq', 'OrangeHRM');
    cy.url().should('eq', 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

  })

  it('should successfully log in with valid credentials', () => {
    ln.setUserName(Cypress.env('username'));
    ln.setPassword(Cypress.env('password'));
    ln.clickSubmitBtn();
    cy.get(ln.headermsg).should('have.text', loginData.expacted_login_msg);
  });

  it('should not log in with invalid credentials', () => {
    ln.setUserName(Cypress.env('username'));
    ln.setPassword(loginData.invalidPassword);
    ln.clickSubmitBtn();
    cy.get(ln.alertmsg).should('have.text', loginData.alert_msg);
  });
  
});