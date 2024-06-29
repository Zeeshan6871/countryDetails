# Countries of the World App

This is a full-stack single-page application (SPA) built with React on the frontend and Node.js on the backend. The application allows users to search for countries based on currency codes, view detailed information about each country, mark countries as favorites, and view search history.

## Features

- User Authentication: Login and registration functionality using JWT tokens for secure authentication and session management.
- Country Details Display: Dynamically render details of countries such as name, currency, capital, languages, and flag based on the user's currency code search.
- Debounced Search: Efficiently query countries by currency code, reducing unnecessary API calls.
- Sorting Functionality: Sort displayed countries alphabetically in both ascending and descending order.
- Favorites Feature: Mark countries as favorites and view them on a dedicated "Favorites" page.
- Search History Tracking: Record the last five unique searches per user and display them in a "History" section on the Homepage.
- Focus on Search Input: Automatically focus the search input field when the Homepage component is rendered.

## Technologies Used

- **Backend:** Node.js, Express.js, MongoDB, JWT
- **Frontend:** React, Context API, React Router, Axios

## Deployed Link

-[countryApp](https://country-details-h445.vercel.app/)

- credentials
  username - zeeshan@123
  password - 1234

## Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repository-url/countries-app.git
   cd countries-app
   Setup the backend:
   ```

bash
Copy code
cd backend
npm install
Create a config.js file in the backend folder with the following content:

javascript
Copy code
module.exports = {
jwtSecret: 'your_jwt_secret',
mongoURI: 'mongodb://localhost:27017/countriesApp'
};
Start the backend server:

bash
Copy code
npm start
Setup the frontend:

bash
Copy code
cd ../frontend
npm install
npm start
Access the application at http://localhost:5000.

Usage
Register a new user account or log in with existing credentials.
Use the search bar on the homepage to search for countries by currency code.
Mark countries as favorites and view them on the "Favorites" page.
View your search history on the homepage.
