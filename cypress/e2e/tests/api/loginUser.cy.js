import '../../../support/commands.js';
const { login, getproducts } = require('../../../support/apiUtils.js');
const loginuser = require('../../../fixtures/loginuser.json');

describe('API Tests', () => {
  it('Login with correct email & password and fetch products', () => {
    login(loginuser.email, loginuser.password).then((result) => {
      const response = result.response;
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('access_token').that.is.not.empty;

      const accessToken = response.body.access_token;

      // Fetch products with the obtained access token
      getproducts(accessToken).then((productResponse) => {
        expect(productResponse.status).to.eq(200);
        // Add further assertions for product response if needed
      });
    });
  });

  it('Login with incorrect email & password', () => {
    login(loginuser.incorrectemail, loginuser.password).then((result) => {
      const response = result.response;
      expect(response.status).to.eq(401);
      expect(response.body.message).to.eq('Incorrect email or password');
    });
  });
});
