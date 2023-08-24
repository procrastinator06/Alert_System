# Alert_System

This repository contains a simple web application built using Node.js, Express.js, and MongoDB. 
The application allows users to create alerts with various details, which are then stored in a MongoDB database. 
It consists of two main pages: "Page 1" for creating alerts and displaying them in a table, and "Page 2" for viewing active alerts.

## Features

- Page 1:
  - Create an alert with fields like Alert Title, Alert Time, Alert Date, and Alert Type.
  - Store the created alert in the MongoDB database.
  - Display a table of all created alerts with their details.

- Page 2:
  - View a table of active alerts.
  - Display the alerts created on Page 1.

## Prerequisites

- Node.js (https://nodejs.org/)
- MongoDB (https://www.mongodb.com/try/download/community)

## Setup

1. Clone the repository:

https://github.com/procrastinator06/Alert_System.git

2. Install dependencies:

  npm install express mongoose ejs body-parser

3. Install MongoDB Compass:

- Download and install MongoDB Compass from the official MongoDB website: [MongoDB Compass Download](https://www.mongodb.com/try/download/compass)   

4. Access MongoDB Compass:

- Open MongoDB Compass.
- Click on "New Connection" and enter the connection details (Hostname: localhost, Port: 27017, Database: TestDB, Authentication: None).
- Click the "Connect" button to establish a connection.

4. Start the server :

   node app.js
   
5. Access the application:

- Page 1: http://localhost:3000/page1
- Page 2: http://localhost:3000/page2

## Dependencies

- Express.js: Web framework for building the server.
- Mongoose: MongoDB ODM for interacting with the MongoDB database.
- EJS: Templating engine for rendering views.
- Body-parser: Middleware for parsing request bodies.

## Data Storage

- MongoDB is used to store the alerts data.
- Connection details: mongodb://localhost:27017/TestDB
- Collection name: alerts

## Credits

This project is based on the requirements provided for a Node.js assignment.



