class HomePage{
  admin_Btn="//span[normalize-space()='Admin']";
  job_Btn="//span[normalize-space()='Job']";
  job_List=".oxd-topbar-body-nav-tab-link";
  jobcategorie_Btn="//a[normalize-space()='Job Categories']";
  add_Btn="//button[normalize-space()='Add']";
  nametxt_Box="(//*[@class='oxd-input oxd-input--active'])[2]";
  save_Btn="//button[normalize-space()='Save']";
  success_Notification="//*[normalize-space()='Successfully Saved']";



  setUserName(username) {
    cy.get(this.txtUserName).type(username);
}







}