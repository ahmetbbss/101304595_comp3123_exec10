# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### pplication Overview:
Purpose and Functionality:

The purpose of this application is to showcase the integration of React, Redux, and JWT for user authentication. The main functionalities include:

## User Authentication:

Users can input a username in the provided text field.
Clicking the "Login" button simulates user authentication by dispatching a Redux action with a fake JWT token.
Upon successful authentication, a welcome message is displayed along with a "Logout" button.
Logout:

Clicking the "Logout" button dispatches a Redux action to reset the authentication state.

## State Management with Redux:

The application employs Redux for state management to handle user authentication.
Redux actions (login and logout) are dispatched to update the state.
The Redux store retains the application state, encompassing the user's authentication status and the JWT token.

## Styled User Interface:

The application boasts a modern and clean user interface.
Styling is implemented using CSS to enhance the visual aesthetics.
Setting Up and Running the App:

## Prerequisites:

Node.js and npm installed on our machine.
Setup Instructions:

## Clone the repository:

git clone <github.com/ahmetbbss/101304595_comp3123_exec10.git>
cd react-redux-jwt-application

## Install dependencies:

npm install

## Running the App:

npm start
Open your browser and navigate to http://localhost:3000 to experience the React app with Redux and  JWT authentication.

## How Redux and JWT are Used:
Redux:

Redux is employed for efficient state management.
Actions such as login and logout are dispatched to the Redux store, facilitating updates to the authentication state.
The Redux store holds the application state, encompassing the user's authentication status and the JWT token.

## JWT (JSON Web Token):

The application employs JWT as a simulated means of user authentication.
A fake JWT token (fake-token) is generated during the login process (for demonstration purposes).
In a realistic scenario, the application would interact with a server to acquire a valid JWT token post successful authentication.
The JWT is stored in the Redux state and is crucial for determining the user's authentication status.