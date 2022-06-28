# .Class Docs

## What is .Class?

**These docs were last updated on: 28th June 2022.**

_.Class_ is an app that was created during the W9 project week at the [School of Code](https://www.schoolofcode.co.uk), in response to a brief which asked us to create a full-stack application that would improve the lives of bootcampers. It operates as a yearbook for our coding bootcamp, though it could be edited to apply to many other groups or organisations.

Our user research indicated that networking and connecting with others on a remote bootcamp could often be difficult, especially for bootcampers who had little to no experience using tools like LinkedIn, or networking in a professional capacity. Therefore, we created this app to make that process easier for people.

The app – when completed – will show profiles for each user, whether they're open to networking and in what ways, link to users' other socials, and allow users to locate other users within their area or nearby. The app is currently a work-in-progress, so not all functionality is complete.

The front-end is created in React, and currently uses react-testing-library for testing.

The back-end is written in PostgreSQL, using Node.js and the Express framework, and currently uses Jest for testing.

### Other Useful Resources

Other documentation for the technologies we used to create _.Class_ that you might find helpful:

- [React's 'Getting Started' Docs](https://reactjs.org/docs/getting-started.html)
- [New Beta React Docs](https://beta.reactjs.org)
- [React Testing Library Docs](https://testing-library.com/docs/react-testing-library/intro/)
- [PostgreSQL Website](https://www.postgresql.org)
- [Express Docs](https://expressjs.com)
- [Node.js Docs](https://nodejs.org/en/)

Please visit the [Roadmap](#roadmap) section of our docs for information on potential future features and updates.

You can access GitHub's in-built contents navigator for these docs by clicking the hamburger menu at the top-left of this window.

## How to Install and Start the App

To install the app, you will first need to clone down or fork the repositories for the front and back-end.

- The code for the front-end is located in this GitHub repository for the [w9_frontend-project-room-21-1](https://github.com/SchoolOfCode/w9_frontend-project-room-21-1).
- The code for the back-end is located in this GitHub repository for the [w9_backend-project-room-21-1](https://github.com/SchoolOfCode/w9_backend-project-room-21-1).

You can clone each repository in turn by using the following commands:

```
git clone https://github.com/SchoolOfCode/w9_frontend-project-room-21-1.git
git clone https://github.com/SchoolOfCode/w9_backend-project-room-21-1.git
```

Alternatively, click the 'Fork' option on GitHub on each repository's page, and follow the on-screen instructions.

### Install the Front-End

Once you have cloned or forked the front and back-end repositories, follow these steps to continue installing the front-end.

First, in the terminal, run a `cd` command to change directory into the `front-end-room-21` folder.

Once you are inside of `front-end-room-21`, run:

```
npm i
```

This will install the appropriate packages and dependencies for the front-end app.

### Install the Back-End

Now, you need to install the back-end app.

Change directory with another `cd` command, and change into the back-end file in the terminal.

Then, run:

```
npm i
```

This will install the necessary packages for the back-end.

### Prepare the Database

After these packages have been installed, you will need to prepare your own database in PostgreSQL to host your data.

We would recommend using Heroku to host your database, as this is the provider we originally used. You can use an alternative provider, but there might be some differences in creating a database and accessing your database credentials. In this case, please refer to the docs of the provider chosen for more information.

If using Heroku:

- Login or create an account.
- Then, create a new database.
- From this new database, navigate to ‘Resources’ and install ‘Heroku Postgres’ as a free add-on.
- Then, click on this add-on, and navigate to ‘Settings’.
- You should see a dropdown here to your ‘Database Credentials’.
- Click to view these credentials.

Once you have your new database credentials, you will need to create a .env file at the root level of your back-end file system in order to store them in.

To create a .env file – which holds environment variables – create a new file inside the back-end folder and name it .env.

The server expects a `PGHOST`, `PGDATABASE`, `PGUSER`, `PGPORT`, `PGPASSWORD` and `PGURI`. In a Heroku database, these are respectively the following database credentials: _host_, _database_, _port_, _password_ and _URI_. These are the variables you will save inside the .env.

Format your .env as such:

```
PGHOST: /* your-credential-here */
PGDATABASE: /* your-credential-here */
PGUSER: /* your-credential-here */
PGPORT: /* your-credential-here */
PGPASSWORD: /* your-credential-here */
PGURI: /* your-credential-here */
```

### Populate the Database

After the front and back-ends have been installed and set-up, in your console, run:

```
npm run createProfilesTable
npm run populateProfilesTable
```

This will create and fill the table on the database with our starting data.

### Run the App

Once you have the front and back-end of _.Class_ installed, create a split terminal in your IDE, or otherwise open two terminals.

Then, `cd` into the front-end app in one of the terminals.

After that, `cd` into the back-end app in the other terminal.

- In the back-end, run `npm run dev` to start up the back-end.
- In the front-end, run `npm start` to start up the front-end.

If installation has been successful, you should be able to see the front-end React app live in the browser. The app should return `Biography` components on-screen for however many biographies you have inside your back-end `libs/data.js` file.

## Front-End Guide

Within the front-end React app, inside of the `src` folder we have a `components` folder. This folder holds all of the React components. Each component has its own sub-folder, which contains the component itself in an `Example.js` file, as well as any attached styling in `Example.css` and any attached tests in `Example.test.js`.

### App

State for the app is set in `App.js` and all handler functions and fetch requests to our API are currently performed inside of this file. `App.js` also returns the main components of the front-end and hands down the necessary props.

### Biography

The `Biography` takes in props from the `bioData` state and uses the appropriate values to return the on-screen biographical cards for each bootcamper or user.

### Biolist

The `Biolist` maps over each bootcamper or user who is returned from the database, and displays each of them in their own `Biography` component card. It expects to receive the following values for each entry in the database table: `name`, `imageLink`, `region`, `jobtitle`, `description`.

### Dropdown

The `Dropdown` component currently returns the two dropdowns, for both bootcamper regions and bootcamp cohort. Right now, onChange, the component will send a GET request to the database to return all relevant data that matches the selected filter. The front-end will then display all biographies that match the selected region or cohort. Currently, these dropdowns cannot be combined ie. you cannot select bootcampers from both a certain region and a certain cohort.

### Navbar

Currently, the `Navbar` component sets up the structure for navigating our app once more pages have been implemented. As we have not yet implemented React Router, the `Navbar` is not usefully functional.

### Searchbar

The `Searchbar` currently allows users to search for a bootcamper by name. When the search button is clicked clicked, the component sends a GET request to retrieve relevant entries in the database, and will show any which match on-screen. Please refer to the back-end routing for the error-handling currently in place for this search function.

### Other Files

`Data.js` is a file which contains hard-coded data, mimicking the shape of the data in the dynamic database.

### Color Reference

| Color           | Hex                                                              |
| --------------- | ---------------------------------------------------------------- |
| Main Dark       | ![#171717](https://via.placeholder.com/10/171717?text=+) #171717 |
| Main Light      | ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text=+) #f5f5f5 |
| Lighter Feature | ![#23c0a5](https://via.placeholder.com/10/23c0a5?text=+) #23c0a5 |
| Darker Feature  | ![#006262](https://via.placeholder.com/10/006262?text=+) #006262 |

## Back-End Guide

The main features in the back-end are the `models` and `routes` folders. These directly deal with the database and push the requested data up to the front-end.

### Models

This folder contains all of the code for the various functions within our routes.

### Routes

This folder contains the router, as well as the routes to deal with different queries to the database.

### Scripts

We also have a folder inside of `db` which is called `peopleTable`. This folder contains scripts that will reset the database with new data from the `data.js` file. You can refer to the `package.json` in the back end for terminal commands you can run which will use these scripts in order to drop, create and populate your database tables.

### Adding, Updating and Deleting User Biographies

After completing the installation process, to add a new set of data, you will need to:

- First add the new data on the `/libs/data.js` file making, sure to follow the same data structure as previous entries.
- Next run `npm resetProfilesTable`.
- Your data should now be updated.
- If the reset script doesn't work, run the drop, create and populate scripts, in that order.

To update or delete a profile, you follow the same procedure as creating a new profile. However, instead of adding an entirely new profile, you either delete one from the array, or change the data in an existing entry.

## Roadmap

These are some of the future changes which are to be implemented to the app. This is the direction in which the app will be developed, so keep this in mind when traversing or editing the code, as significant changes may be made in these areas in future updates.

### Short-Term Goals

- Move the hooks to their own folders to improve readability.
- React router to be implemented to achieve stretch goals.
- End to end testing with Cypress.

### Stretch Goals

- User Page: a page in which users can log into the app and change their own data that displays. [See this wireframe](https://www.figma.com/proto/x24VtV2v5KdFi7KAXZhvsH/room21-design?node-id=34%3A67&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A67).
- Biography Page: a page that loads up when expanding a user on the yearbook page and displays additional data such as contact info etc. [See this wireframe](https://www.figma.com/proto/x24VtV2v5KdFi7KAXZhvsH/room21-design?node-id=34%3A67&scaling=scale-down&page-id=0%3A1&starting-point-node-id=34%3A67).
- Additional filter functions for the Yearbook page that will select from multiple parameters.
- Chat function so that users can connect on the app instead of having to move to a different site.
- SoC radio button or page, to play the biggest hits from the SoC.

## Contributions & Opening PRs

This section of the docs is a work-in-progress, please come back later!

Currently, we're not open to contributions or PRs.

## Troubleshooting, Known Issues & FAQ

**None of the profiles are showing on the front-end?** Check the database first to see whether it needs to be repopulated. If this doesn’t work, check that your credentials inside the .env file at the root level of the back-end are up to date. With providers like Heroku, sometimes these credentials are refreshed and are not automatically updated on free plans, so you may need to update them occasionally yourself.

## Authors

_.Class_ was created by:

- [@madisonlowe](https://github.com/madisonlowe)
- [@Udecunup5](https://github.com/Udecunup5)
- [@samsonhumber](https://github.com/samsonhumber)
- [@Ismailali99](https://github.com/Ismailali99)

Thanks for stopping by!
