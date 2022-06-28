# DOCUMENTATION

TODO: Edit the other README inside of the main folder.

Documentation a work-in-progress, come back later!

# .Class Docs

## Contents

These docs were last updated on: 28th June 2022.

## What is .Class?

The .Class App is a web page that both current and ex-bootcampers can sign up to network with other bootcampers.
The app is designed for users to locate and find bootcampers within their area or nearby, to make it easier to network during the bootcamp and after. Networking for some could be challenging therefore the app was created to make it easier for them.
The app is created in React. For the front-end, we used React-testing-library to test components. For our Back-End we wrote our Database in PostgreSQL. The Back-End is using Node.js and Express.
React Get started  
React-testing-library
PostgresQL
Express
Node.js
The app is currently a work-in-progress, please visit the future roadmap section for information on potential future features and updates.

## How to install and start the app.

To install the app, you will first need to clone down or fork the repos for the front and back-end. The code for the front-end is located in this GitHub repository here and the code for the back-end is located in this GitHub repository here.
Once you have cloned down these repositories, follow these steps to continue installing the front-end.
First, in the terminal, run `cd front-end-room-21` to make sure you are inside the app folder, which contains the front-end React app.
Once you are inside of front-end-room-21, run `npm i` to install the appropriate packages and dependencies.
You will need to install the back-end app as well, as the front-end interacts dynamically with the API and database of the back-end app.
Once you have cloned down or forked the back-end repository, change into the back-end file in the terminal, and run `npm i` to install the necessary packages for the back-end.
After these packages have been installed, you will need to prepare your own database in PostgreSQL to host your data. We would recommend using Heroku to host your database, as this is the provider we originally used when building .Class. However, you should be able to use another provider if you wish.
If using Heroku, login or create an account. Then, create a new database. From this new database, navigate to ‘Resources’ and install ‘Heroku Postgres’ as a free add-on. Then, click on this add-on, and navigate to ‘Settings’. You should see a dropdown here to your ‘Database Credentials’. Click to view these credentials.
Once you have your new database credentials, you will need to create a .env file at the root level of your back-end file system, in order to store these credentials in.
The server expects a `PGHOST`, `PGDATABASE`, `PGUSER`, `PGPORT`, `PGPASSWORD`and `PGURI`. These are your database credentials: _host_, _database_, _port_, _password_ and _URI_ respectively in a Heroku database.
Format your .env as such:

```
PGHOST: /* your-credential-here */
PGDATABASE: /* your-credential-here */
PGUSER: /* your-credential-here */
PGPORT: /* your-credential-here */
PGURI: /* your-credential-here */
```

After the front and back-ends have been installed and set-up, in your console, run:

```
npm run createProfilesTable
npm run populateProfilesTable
```

This will create and fill the table on the database with our starting data.
Once you have the front and back-end of .Class installed, create a split terminal, and `cd` into the front-end app in one terminal, and the back-end app in the other.
Then, in the back-end, run `npm run dev` to start up the back-end. In the front-end, run `npm start` to start up the React app.
If installation has been successful, you should be able to see the front-end React app live in the browser, which should return the data passed from the back-end to the database within several `Biography` components on-screen.

## Front-end.

With in the React app, inside of the `src` folder we have `component` folder each component has be separated into separate folders
`Navbar`- Contains the CSS styling for the navbar.
`Dropdown`- The dropdown selection for bootcamper Regions, and Bootcamp Cohort, when interacted with it onChange Sends a GET Request to the Database to return all the relevant data that matches the key-values, and will display all selected biographies from the selected region or Cohort.
`Searchbar` - The Search Bar allows users to input information, when clicked the search button, the Onclick sends a GET Request to retrieve relevant data using Key Value pairs, and will display the biography with the name searched for.
`Biolist`- The Biolist displays all Bootcampers in the database Biography by looping through the Database and creating a New div for every ID in the database. It displays bootcamper’s `name` `Region` `Job Title` `Description` `Avatar`
`Biography`- The biography renders the values from the data, and places them into its own DIV.

back-end.
run down of main parts: ‘component’ tree, what each folder does, what it affects, any tests.
then, questions section:
adding another biography?

## Back-end.

The main components within the back-end are the models and routes folders which directly deal with the database and pushes the requested data up to the front end.
Models - contains all the code for our various functions within our routes.
Routes - contains the router as well as how to deal with queries to the database.
We also have a folder called peopleTable which contains functions that will reset the database with new data from the data.js file. See back-end installation to see how this works.

## Adding a new profile

After completing the installation process to add a new set of data you will need to:
First add the new data on the /libs/data.js file making sure to follow the same data structure.
Next run “npm resetProfilesTable”.
Your data should now be updated.

## Updating or Deleting a profile

To update or delete a profile you follow the same procedure as creating a new profile, however instead of adding a new one you either delete one or change the data in an existing one.
future roadmap.
changes that might be made structurally that could affect devs working on it: hooks folder, edited search components, react router and additional pages (refer to wireframes and planning).

## Future Roadmap

These are some of the future changes which are to be implemented. This is the direction in which the app will be developed, so keep this in mind when traversing or editing the code, as significant changes may be made in these areas in future updates.
**Code goals:**
Move the hooks to their own folders to improve readability.
React router to be implemented to achieve stretch goals.
End to end testing with cypress.
**Stretch goals:**
User page - a page in which users can log into the app and change their own data that displays. (wireframe example)
Biography page - a page that loads up when expanding a user on the yearbook page and displays additional data such as contact info etc. (wireframe example)
Additional filter functions for the yearbook page that will select from multiple parameters.
Chat function so that users can connect on the app instead of having to move to a different site.
SOC radio button to play the biggest hits from the SOC.

contact us / how to open issues and PRs. should we add ‘troubleshooting’?

## Troubleshooting & Common / Known Issues & FAQs (retitle this maybe or split up)

None of the profiles are showing on the front-end? Check the database first to see whether it needs to be repopulated. If this doesn’t work, check that your credentials inside the .env file at the root level of the back-end are up to date. With providers like Heroku, sometimes these credentials are refreshed and are not automatically updated on free plans, so you may need to update them occasionally yourself.

## How to contribute or open issues

## Authors

[@madisonlowe](https://github.com/madisonlowe)
[@Udecunup5](https://github.com/Udecunup5)
[@samsonhumber](https://github.com/samsonhumber)
[@Ismailali99](https://github.com/Ismailali99)
