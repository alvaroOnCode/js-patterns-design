/**
 * Observer
 */

// Example: Creating and setting up some user
const user = new user();

const init = () => {
  user.on('login', userLoggedIn);
  user.on('login', someOtherFunction);
  // App is listenning the user
};

const userLoggedIn = () => {
  console.log("Some user logged in...");
};

// Example: Starting the app to listen events
app.init();

/**
 * - Warning! -
 * Code bellow would be in another file.
 */

const login = () => {
  // Business logic for login here...
  // ...
  
  user.trigger('login');
}

// Example: Some other place
login();