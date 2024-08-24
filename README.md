# Sample Microservice Architecture

This repository demonstrates a microservice architecture consisting of two main services: a backend server and a frontend server. The tools and technologies used in this project include:

- **Backend Server**: Built using Node.js, TypeScript, MongoDB, Redis, and Docker.
- **Frontend Server**: Developed with React, TypeScript, Axios, and Docker.
- **Docker Compose**: Used to orchestrate the services and ensure smooth communication between them.

## Table of Contents
- [Project Overview](#project-overview)
- [File Structure](#file-structure)
  - [Backend Server](#backend-server)
  - [Frontend Server](#frontend-server)
- [Backend Key Components](#backend-key-components)
  - [1. Root Configurations](#1-root-configurations)
  - [2. src Directory](#2-src-directory)
  - [3. Environment Setup](#3-environment-setup)
  - [4. Sample Data (sampledata.json)](#4-sample-data-sampledatajson)
  - [5. Sample Service (sampleService.ts)](#5-sample-service-sampleservicets)
  - [6. Controllers (controllers/sample.ts)](#6-controllers-controllerssamplets)
  - [7. Redis Client (utils/redisClient.ts)](#7-redis-client-utilsredisclientts)
- [Frontend Key Components](#frontend-key-components)
- [Running the Project](#running-the-project)
  - [1. Docker Setup](#1-docker-setup)
  - [2. Local Setup](#2-local-setup)
- [Endpoints](#endpoints)
- [Additional Thoughts](#additional-thoughts)
  - [1. Scaling](#1-scaling)
  - [2. Dockerization](#2-dockerization)
- [Conclusion](#conclusion)

## Project Overview

This project is structured into two services:
1. **Backend Server**: A Node.js and TypeScript-based backend that leverages MongoDB for data storage and Redis for caching.
2. **Frontend Server**: A React application that consumes the backend API and renders the data.

We utilize Docker Compose to manage the services and ensure seamless communication between them. Below is the Docker Compose configuration used to start both the backend and frontend servers.

## File Structure

### Backend Server
```plaintext
backend-server/
│
├── Dockerfile
├── nodemon.json
├── package.json
├── tsconfig.json
├── .env
├── sampledata.json
│
├── src/
│   ├── index.ts
│   ├── controllers/
│   │   └── sample.ts
│   ├── models/
│   │   └── connection.ts
│   ├── router/
│   │   ├── index.ts
│   │   └── sample.ts
│   └── utils/
│       ├── errorCodes.ts
│       ├── redisClient.ts
│       └── response.ts
└── README.md

frontend-server/
│
├── public/
│   ├── index.html
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   └── SampleComponent.tsx
│   ├── App.tsx
│   ├── index.tsx
│   └── styles/
│       └── styles.css
│
├── package.json
├── tsconfig.json
└── README.md
```

Backend Key Components
1. Root Configurations
Dockerfile: Defines the Docker container setup using Node.js 16 Alpine. It installs dependencies and exposes port 4001.
nodemon.json: Configures Nodemon to watch .ts and .js files in the src directory and run ts-node to compile and execute your TypeScript code.
tsconfig.json: TypeScript configuration with NodeNext module resolution and paths mapped to the src directory.
Prettier and ESLint Configurations: Enforces code styling and linting rules for consistency across the codebase.
2. src Directory
index.ts: The main entry point of the server. It sets up Express with middleware, routes, and a MongoDB connection. The server listens on a specified port and uses environment variables for configuration.
controllers/sample.ts: Contains the logic for handling requests related to sample data. Utilizes Redis for caching responses.
models/connection.ts: Manages MongoDB connection logic with automatic retry on connection failure. It connects to a MongoDB instance based on environment variables.
router/index.ts and router/sample.ts: Define the routing structure of the application, where sample.ts maps to specific controller methods.
utils/:
errorCodes.ts: Contains functions to standardize error responses.
redisClient.ts: Manages Redis connections and operations such as set, get, and checking key existence.
response.ts: Utility functions to send standardized responses.
3. Environment Setup
Ensure the presence of a .env file with the following environment variables:

```bash
PORT=4001
DB_HOST=your_mongodb_uri
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
REDIS_PASSWORD=your_redis_password
```
##Frontend Key Components
App.tsx: Entry point of the React application. Renders the main SampleComponent.
SampleComponent.tsx: Fetches data from the backend using axios and displays it in a list format.
index.tsx: The main entry point for rendering the React application to the DOM.
styles.css: Global styles applied to the React application.

##Running the Project
1. Docker Setup
Ensure Docker is installed on your machine. Then, navigate to the project directory and use Docker Compose to start the services:
```bash
docker-compose up
```
This will build and start the backend, frontend, MongoDB, and Redis containers.

2. Local Setup
For local development, ensure you have Node.js installed. Then, navigate to the project directory and run the following commands:

```bash
# Install dependencies
npm install

# Start the backend server
npm run dev
```
To start the frontend server, navigate to the frontend-server/ directory and run:
```bash
# Install dependencies
npm install

# Start the frontend server
npm start
```


###Endpoints
GET /api/sample/details
Fetches the sample data from the backend server, using Redis for caching responses.

###Additional Thoughts
1. Scaling
Scaling this application would involve utilizing Docker for containerization, deploying multiple instances of the backend services, and using a load balancer.

2. Dockerization
The Dockerization of both the backend and frontend servers allows for easier deployment across environments and consistent development experiences. Future iterations could also benefit from implementing a CI/CD pipeline using Docker.

###Conclusion
This project is a full-stack application that showcases the use of Node.js, Express, MongoDB, Redis, React, and Docker in a streamlined, modular setup. This repository is a good starting point for building scalable applications that utilize caching and efficient data management techniques.
