# Sauce Demo Test Automation
The following is a response to the Testing Assessment provided by Northwestern Mutual in March 23, 2021. It also served an additional purpose for learning more about automation and parallel testing, a basic understanding Selenium Webdriver, and a simple use of WebDriverIO and Cucumber.

---

### User Stories
- UI Automation
  - Log into the site
  - Sort the items (Lowest Price sort)
  - Add two or more items to the shopping cart
  - Visit the shopping cart
  - Assert that the items that you added are in the cart
  - Remove an item and then continue shopping
  - Add another item
  - Checkout
  - Assert you are purchasing the correct items
  - Assert the total price
  - Finish checkout
- API Automation
  - Make GET, POST, PUT, and DELETE calls
  - Set headers for a request
  - Set the body for a request
  - Assert the response from a request
  - Use the response from one call in the request for another

---

### Criteria
* UI
  * Does the code function properly and follow the workflow
  * How are you selecting elements
  * How are you waiting for elements to load
  * Error Handling (Assertions, Logging, etc.)
  * Code structure and design
  * How modular is your code
  * Neatness counts
* API
  * Are the requirements met
  * Does the code function properly
  * Are your assertions correct
  * Code structure and design
  * How modular is your code
  * Neatness counts

---

### Technology
Mocha, Chai, Supertest, WebDriverIO, Cucumber

---

### Functionality
The test functionality includes:
* UI
  * Login
    * User may login with registered credentials
  * Inventory/Cart
    * User may sort inventory items
    * User may add items to shopping cart
    * User may remove items from shopping cart
    * User may visit the shopping cart
  * Checkout
    * User may confirm items added
    * User may confirm total amount
    * User may checkout
* API
  * User may request a post
  * User may create a post
  * User may patch a post
  * User may delete a post
    
---

### UI Structure
* __features__
  * __cart.feature__
  * __checkout.feature__
  * __DEMO.feature__
  * __inventory.feature__
  * __login.feature__
* __step-definitions__
  * __cart__
    * given.js
    * then.js
    * when.js
  * __checkout__
    * then.js
    * when.js
  * __inventory__
    * then.js
  * __login__
    * given.js
    * when.js
  * __reusable__
    * given.js
    * then.js
    * when.js
* __support__
  * actions.js

Notes: There does not seem to be a generally approved standard for directory structure in tests, and is more dependent on the team's choice. For this reason, I found it more convenient to keep a `When/Given/Then` structure for scalability purposes.
---

### API Structure
* __tests__
  * __api.test.js__
* __test-setup.js__

---

## Local Dev Set Up

Clone the repository to your local computer
```
git clone https://github.com/dionisggr/saucedemo.git
```

Use the package manager `npm` to install dependencies:
```
npm install
```

Run the UI automation tests in parallel:
```
npx wdio wdio.conf.js
```

Run the API automation tests with:
```
npm test
```

---

### Notes
Tests run in instances of 5 for performance consideration in the user-end, when running tests.

You may change the maximum instances 10 (maximum current test) or higher, as your machine allows.

In `wdio.conf.js`:
```
exclude: [
    // 'path/to/excluded/files'
  ]
...

maxInstances: 5   // Change to 10, or your preference

...
capabilities:[{
  ...
}]
```