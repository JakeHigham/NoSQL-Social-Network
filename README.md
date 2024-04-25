# NOSQL Social Network
![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)

## Overview

Welcome to my Social Network API assignment! In this assignment, I've built an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list. This project utilizes Express.js for routing, MongoDB as the database, and Mongoose as the ODM. This assignment is still incomplete due to my DELETE routes not currently working as of 4/23/2024. Please check back soon as I'm working to get it fixed!

## Features

- **User Management**: Users can be created, updated, and deleted. Each user has a unique username and email.
- **Thought Sharing**: Users can create thoughts, view all thoughts, and view a single thought by its ID.
- **Reactions**: Users can react to thoughts by adding reactions. Reactions can be created and deleted. (Not tested)
- **Friend Management**: Users can add and remove friends from their friend list. 

## How to Use

To get started, make sure you have MongoDB installed on your machine. Follow the [MongoDB installation guide](https://coding-boot-camp.github.io/full-stack/mongodb/how-to-install-mongodb) if you need help with the installation.
Also required are Express 4.19.2, and Mongoose 8.3.2


### Setting Up Models and API Routes

The project includes the following models:

- **User**: Represents a user in the social network. Each user has a username, email, thoughts, and friends.
- **Thought**: Represents a thought shared by a user. Each thought has thought text, a creation timestamp, a username, and reactions.
- **Reaction**: Represents a reaction to a thought. Each reaction has a body, a username, and a creation timestamp.

The API routes available are:

- **/api/users**: GET, POST, PUT, DELETE
- **/api/users/:userId/friends/:friendId**: POST, DELETE
- **/api/thoughts**: GET, POST, PUT, DELETE
- **/api/thoughts/:thoughtId/reactions**: POST, DELETE
  
### Testing the API

You can test the API using tools like Insomnia or Postman. Here are some sample requests:

- **GET All Users**: `GET /api/users`
- **GET Single User**: `GET /api/users/:userId`
- **Create User**: `POST /api/users`
  ```json
  {
    "username": "exampleUser",
    "email": "user@example.com"
  }

## Walkthrough Video

To see the functionality of the API in action, check out this [walkthrough video](https://www.youtube.com/watch?v=QvC5c2ShAPY). The video demonstrates how to start the server, test various API routes, and meet all the acceptance criteria.
Testing was conducted using insomnia to test the api endpoints.
## Contributions
- If you'd like to make a contribution you can email me at jacobhcvn65@gmail.com! I'm always open to learning different or better ways that I can complete these assignments!

## Grading Requirements

This project is graded based on the following criteria:

- Deliverables: 10%
- Walkthrough Video: 37%
- Technical Acceptance Criteria: 40%
- Repository Quality: 13%

## License 
  This project is under an MIT license.

## Contact
   You can view more of my projects at https://github.com/JakeHigham, any suggestions or if you'd like to contribute reach out to me at jacobhcvn65@gmail.com








