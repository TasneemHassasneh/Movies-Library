# Movies Library - 1.0.0

**Author Name**: Tasneem Al-Hassasneh

## WRRC

![WRRC-Img](WRRC%20.png)

## Overview

## Getting Started

To build this app on your own machine and get it running, follow these steps:
- Create a new repository on GitHub called "Movies-Library".
- Clone the repository to your local machine using the command `git clone *<repository url>*.`
- Navigate to the project directory and run `npm init -y` to - initialize the project with default settings.
- Create the basic file structure for the project by creating the following files:
  1. **server.js:** *This file will contain your server-side code.*
  2. **.gitignore:** *This file will specify which files should be ignored by Git.*
  3. **.eslintrc.json:** *This file will contain your ESLint configuration.*
- Install the required packages by running the command `npm install express cors`.
- Build the following routes using the *GET* request:
  1. **Home Page Endpoint: "/"**
     - Create a route with a method of *GET* and a *path of "/".*
     - The callback should use the provided JSON data.
     - Create a **constructor function** to ensure your data follows the same format.
  2. **Favorite Page Endpoint: "/favorite"**
     - Create a route with a method of *GET* and a *path of "/favorite".*
     - The callback should respond with the message **"Welcome to Favorite Page".**
- Create a function to handle server errors with a **status of *500* and a response message of *"Sorry, something went wrong"* .**
- Create a function to handle ***"page not found"* errors with a status of *404*.***
