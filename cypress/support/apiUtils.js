// Import custom commands from the support folder
import '../support/commands.js';

// Require the configuration file containing API base URL and endpoints
const apiconfig = require('../apiconfig.json');

// Function to log in a user and get an access token
function login(email, password) {
    return cy.request({
        method: 'POST', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.login}`, // URL for the login endpoint
        body: {
            email: email, // Email for login
            password: password, // Password for login
        },
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return {
            response: response, // Return the entire response object
            access_token: response.body.access_token, // Extract the access token from the response body
        };
    });
}

// Function to get products with a valid access token
function getproducts(accessToken) {
    return cy.request({
        method: 'GET', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}`, // URL for the products endpoint
        headers: {
            Authorization: `Bearer ${accessToken}`, // Set the Authorization header with the access token
        },
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Function to get products without an access token
function getproductswithouttoken() {
    return cy.request({
        method: 'GET', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}`, // URL for the products endpoint
        headers: {
            Authorization: "", // No Authorization header
        },
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Function to create a new product with a valid access token
function createProduct(payload, accessToken) {
    return cy.request({
        method: 'POST', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}`, // URL for the products endpoint
        headers: {
            Authorization: `Bearer ${accessToken}`, // Set the Authorization header with the access token
        },
        body: payload, // Product data to be sent in the request body
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Function to update an existing product with a valid access token
function updateProduct(payload, accessToken, id) {
    return cy.request({
        method: 'PATCH', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}/${id}`, // URL for the specific product endpoint
        headers: {
            Authorization: `Bearer ${accessToken}`, // Set the Authorization header with the access token
        },
        body: payload, // Updated product data to be sent in the request body
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Function to update an existing product without an access token
function updateProductwithoutToken(payload, id) {
    return cy.request({
        method: 'PATCH', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}/${id}`, // URL for the specific product endpoint
        headers: {
            Authorization: " ", // No Authorization header
        },
        body: payload, // Updated product data to be sent in the request body
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Function to delete an existing product with a valid access token
function deleteProduct(accessToken, id) {
    return cy.request({
        method: 'DELETE', // HTTP method for the request
        url: `${apiconfig.baseUrl}${apiconfig.endpoints.products}/${id}`, // URL for the specific product endpoint
        headers: {
            Authorization: `Bearer ${accessToken}`, // Set the Authorization header with the access token
        },
        failOnStatusCode: false, // Continue the test even if the status code is not 2xx
    }).then((response) => {
        return response; // Return the response object
    });
}

// Export the functions for use in other test files
module.exports = {
    login,
    getproducts,
    getproductswithouttoken,
    createProduct,
    updateProduct,
    updateProductwithoutToken,
    deleteProduct
};
