#SETUP PROJECT ENVIRONMENT USING NODE.JS
1. Start by setting up your project environment. 
Make sure Node is installed from the terminal. 
Install the packages Express, Body-Parser, and Cors from the terminal and them include them your server.js file.
Create a server running on the port of your choosing
Add a console.log() to the server callback function, and test that your server is running using Node in the 
terminal to run the file server.js.

#GET AND POST REQUEST FOR FETCHING DATA

2. Add a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData.
The POST route should anticipate receiving three pieces of data from the request body
temperature
date
user response
Make sure your POST route is setup to add each of these values with a key to projectData.

#API credentials from OpenWeatherMap website

3. Write an async function in app.js that uses fetch() to make a GET request to the OpenWeatherMap API.
Create an event listener for the element with the id: generate, with a callback function to execute when it is clicked.
Inside that callback function call your async GET request with the parameters:
base url
user entered zip code (see input in html with id zip)
personal API key

#POST request to render data on UI dynamically.
