# CHAT ROOM - Setup Instructions

This document provides step-by-step instructions for setting up and running the project.

## Prerequisites

Before proceeding with the installation, please ensure you have the following:

- Git installed on your system
- Node.js installed on your system
- Knex installed globally

## Installation Steps

1. Clone the repository by running the following command in your terminal:
git clone [repository_link]


2. If you don't have Node.js installed, please download and install it from the official Node.js website: [https://nodejs.org](https://nodejs.org)

3. Install Knex globally by running the following command:
npm install -g knex


4. Create an `.env` file in the server folder and add the following variables with their corresponding values:
```
BASE_URL=
NODE_ENV=
DB_NAME=
DB_HOST=
DB_USERNAME=
DB_PASSWORD=
DB_PORT=
DB_CHARSET=
PORT=
JWT_SECRET_KEY=
```

5. Navigate to the server folder in your terminal and run the following command to install the server dependencies:
```
npm install
```

6. Build the server by running the following command:
```
npm run build
```
7. Navigate to the client folder in your terminal and run the following command to install the client dependencies:

npm install


8. To start the server, navigate to the server folder in your terminal and run the following command:
```
npm run watch
```

9. To verify if the server is running correctly, open your browser and visit [http://localhost:3001/v1/ping](http://localhost:3001/v1/ping). If you see a welcome message, it indicates that the server is healthy and running smoothly.

10. To run the client side, open a new terminal window, navigate to the client folder, and run the following command:
 ```
 npm start
 ```

11. To access the client side, open your browser and visit [http://localhost:3000/](http://localhost:3000/).

12. To create a build for the client side, run the following command in the client folder:
 ```
 npm run build
 ```
 This will generate a build folder. Copy and paste the contents of this folder to your deployed server.

13. To create a build for the server side, run the following command in the server folder:
 ```
 npm run build
 ```
 The server will create a bundle in the `dist` folder.

Congratulations! You have successfully set up and built the project.
