class Login {
    txtUserName = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    headermsg = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module";
    alertmsg = ".oxd-text.oxd-text--p.oxd-alert-content-text";
    brandImg =".orangehrm-login-branding>img";
    oringeLogo =".orangehrm-login-logo>img";
  
    setUserName(username) {
        cy.get(this.txtUserName).type(username);
    }
  
    setPassword(password) {
        cy.get(this.txtPassword).type(password);
    }
  
    clickSubmitBtn() {
        cy.get(this.btnSubmit).click();
    }
  
    login(username, password) {
        this.setUserName(username);
        this.setPassword(password);
        this.clickSubmitBtn();
    }
  
    getHeaderMsg() {
        return cy.get(this.headermsg);
    }
  
    getAlertMsg() {
        return cy.get(this.alertmsg);
    }

  }
  
  export default Login;