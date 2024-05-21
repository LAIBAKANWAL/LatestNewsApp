# **News Feed App**

> *This is a react native app which fetches newsfeed from api*

## Features

Here’s a detailed guide to create a new React Native project that includes screens for News Feed, Comments, and Likes, and sets up conditional rendering for different types of content. Additionally, it fetches data from Google News, allows users to like, comment, and share posts.

Integrating Redux and Redux-Saga into a React Native project involves setting up the necessary packages and configuring them to manage the application's state and handle side effects. Here’s a step-by-step guide to create a news feed application that includes a News Feed Screen, Comment Screen, and Likes Screen with Redux and Redux-Saga:

### Step 1: Create a New Project
First, create a new React Native project:

### Step 2: Install Required Libraries
Install necessary libraries for Redux, Redux-Saga, and navigation:

### Step 3: Set Up Navigation
Set up React Navigation in your App.js:

### Step 4: Set Up Redux and Redux-Saga
Create the necessary files and folders for Redux and Redux-Saga.

### Step 5: Create Screens
Create the necessary screens in the src/screens directory.

### Step 6: Run Your Application
Finally, run your application:

### Explanation
Redux and Redux-Saga Setup: The store is configured with Redux-Saga middleware. The newsReducer manages the state of the news articles. The newsSaga handles fetching news articles from the API.
### News Feed Screen: 
Fetches data from the Google News API, renders each news item conditionally with text and image, and provides actions to like, comment, and share.
### Comment Screen: 
Allows users to add and view comments.
### Likes Screen:
 Allows users to like a post and shows the number of likes.
### Navigation:
 Uses React Navigation to switch between different screens.
 
By following these steps, you can create a React Native application that integrates Redux and Redux-Saga, displays a news feed, and allows users to like, comment, and share posts.






