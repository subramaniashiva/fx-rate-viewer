FX Currency Converter
===================
This application converts the currency value between GBP, EUR and USD. The application fetches the rate from [Open Exchange Rates
](https://openexchangerates.org) API. Though the API is not providing live updates, the application fetches the rate once every 10 seconds. This interval setting can be changed in one of the config file in the application.
The application is responsive and can work till 320px. No frameworks have been used for making the app responsive.
The project is built from create-react-app repo. Create-react-app enables us to create a react app from scratch in no-time without compromising on the standards. To read more about it, please click [here
](https://github.com/facebook/create-react-app).

Setup
-----

1)  Clone this repo using the following command

  `git@github.com:subramaniashiva/fx-rate-viewer.git`


2)  Move to the repo that you have just cloned and run the following command

  `npm install`

3) Get an API key from Open Exchange Rates API and add that in your **.env.local** file as follows:

  `REACT_APP_API_KEY=YOUR_API_KEY`
4) To start the app, run

    `npm start`
    Navigate to localhost:3000 in your browser to view the app

5) This project is enabled with ESLint. Any JS file that you write must be linted using ESLint. To run the linting command type

  `npm run lint`

6) To build the project for production, run

  `npm run build`

6) This project uses Jest & Enzyme for unit testing. To run tests

  `npm run test`


Tech Stack
----------
Following is the tech stack:

 - **ReactJS** - The view library for the application
 -  **Redux** - For maintaining the state of the application
 -  **Redux Sagas** - For managing the side effects of updating state tree like API calls
 - **SASS** - Using SASS files instead of plain CSS
 - **ESLint** - Used to lint the JS code
 - **Flow** - For typing the code
 -  **Jest & Enzyme** - For unit testing the application

Directory Structure
-------------------
 - **dist** - Contains the distributable version of the project. Ideally this folder gets pushed into the Docker or production server.
 - **src** - Contains the source code of the app.
 - **public** - Contains public files like manifest and index file.

src directory
-----------------
 - **api** - Contains all the details related to the APIs the application uses.
 - **components** - Contains React dumb components. 
 - **config** - Contains the config of the application like API fetch interval, precision..etc
 - **containers** - Contains React stateful components. Only the components in the folder is aware of the Redux store.
  - **constants** - Contains constants used throughout the application.
 - **redux** - Contains the redux files where the state of the application is maintained. To understand the structure of the state tree, we can see the root-reducer..js file under the reducer directory.
 - **sagas** - Used for handling the side effects operations in state tree like API requests.
 - **styles** - Contains styles for the application.
 - **types** - Contains types for the application. Used with Flow.
 -  **utils** - Contains utility functions that will be used throughout the application.

Coding Guidelines
-------
- All the JS files should be covered with unit tests. The current coverage is 80+%. It should be improved further.
- API path is loaded from a separate file. It will be easier to change the API path in future.
- Should have a clear separation between dumb and smart components. Dumb components should render only with props passed.

**ESLint**

The project is enabled with ESLint and a production version of application can be made only if all the files pass the ESLint test.

The reason for choosing ESLint is, it enforces a common rule across the team. Developers working on this project will be forced to have uniform code styling. This helps in maintaining the project in long run.

 - ESLint configurations are maintained in the .eslintrc file in the root directory
 - The project uses babel as its parser for JS files and ES6 is enforced for all JS files
 - The project extends the [**ESLint google rules**](https://github.com/google/eslint-config-google).

Future Improvements
-------
- Improve the testing coverage of the application.
- Enable e2e tests for the application.
- Add 'Swap primary and secondary' functionality.
- Add 'Value for per currency' component.
- Proper error logging service.
- Add more news sources.