# Movie Finder Web App

A web application that enables users to search for movie information. The app retrieves movie details such as posters, cast, plot, 
and ratings using the OMDb API. It is built with Node.js, Express, and EJS and features a responsive design
for an optimal viewing experience on various devices.

## Features

Search Movies: Enter the name of a movie to get details including title, year, director, cast, plot, and IMDb rating.
Responsive Design: The interface adapts to different screen sizes, ensuring usability across devices.
Error Handling: Displays user-friendly error messages if the movie is not found or if there's a problem fetching data.

## Technologies Used

Node.js: JavaScript runtime for server-side logic.
Express.js: Web framework for building the server and handling routes.
EJS: Templating engine for rendering HTML.
Axios: HTTP client for making API requests.
OMDb API: Provides movie information.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/username/repository.git
   cd repository

2. Install the required packages:
   npm install

3. Create a .env file in the root directory by copying .env_sample:
     cp .env_sample .env

4. Open the .env file and replace YOUR_API_KEY_HERE with your actual OMDb API key:
        Open the .env file and replace YOUR_API_KEY_HERE with your actual OMDb API key.

5. Start the application:
       Start the application

   The app will run on http://localhost:3000.

Usage
Open the application in your browser.
Enter a movie name in the search bar and click the "Search" button.
View the movie details including poster, title, year, director, cast, plot, and IMDb rating.
Contributing
Feel free to submit issues or pull requests if you have suggestions for improvements or new features.

License
This project is licensed under the MIT License - see the LICENSE file for details.


