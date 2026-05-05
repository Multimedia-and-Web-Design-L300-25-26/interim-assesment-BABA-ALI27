[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/rVziozBq)
# Interim Assessment: Full-Stack Integration – Coinbase Clone

In this assignment, you will integrate your cloned coinbase frontend with a backend API to build a functional cryptocurrency platform with authentication and dynamic data.

You are required to implement the features using Node.js with MongoDB as the database. Create proper data models (schemas) and structure your project using best practices (models, routes, and controllers). All features must be exposed through RESTful APIs for the frontend to consume.

## 1. Authentication System (JWT-Based)

### Register (GET /register)

Create a user account using:

- Name
- Email
- Password

Send data to the backend API and ensure it is properly stored in the database. Also handle success and error responses appropriately, returning clear and meaningful feedback based on the outcome of each request.

### Login (GET /login)

Authenticate users using email and password, store the returned JWT token securely (preferably using HTTP-only cookies), and redirect the user to the homepage after a successful login.

## 2. Protected User Profile Page

### Create a User Dashboard/Profile Page(GET /profile)

Fetch and display:

- User name
- Email
- Any other relevant info from backend

**NOTE:** This page must be protected and only accessible to authenticated users with a valid JWT token. If the user is not authenticated, they should be redirected to the login page.

## 3. Crypto Data Integration

### GET /crypto (All Tradable Cryptocurrencies)

Fetch all available cryptocurrencies from the backend and display them on the frontend.

### GET /crypto/gainers (Top Gainers)

Fetch cryptocurrencies with the highest percentage increase in price, sorted from highest to lowest.

### GET /crypto/new (New Listings)

Fetch the most recently added cryptocurrencies, sorted from newest to oldest.

### POST /crypto (Add New Cryptocurrency)

Create a new cryptocurrency using:

- Name
- Symbol
- Price
- Image
- 24h Change (percentage change in price over the last 24 hours, e.g. +2.5)

Send data to the backend API and ensure it is properly stored in the database (MongoDB). Also handle success and error responses appropriately, returning clear and meaningful feedback based on the outcome of each request.

## Backend Implementation

This repository now includes a Node.js backend API built with Express and MongoDB.

- `server.js`: application entry point
- `config/db.js`: MongoDB connection logic
- `models/User.js`: user schema with name, email, and password
- `models/Crypto.js`: crypto schema with name, symbol, price, image, and 24h change
- `controllers/authController.js`: user registration, login, profile, and logout logic
- `controllers/cryptoController.js`: crypto list, gainers, new listings, and add crypto logic
- `routes/authRoutes.js`: `/api/auth` endpoints
- `routes/cryptoRoutes.js`: `/api/crypto` endpoints
- `middleware/authMiddleware.js`: JWT protect middleware

### Run the backend locally

1. Copy `.env.example` to `.env`.
2. Set `MONGO_URI`, `JWT_SECRET`, and `CLIENT_URL`.
3. Install dependencies:

```bash
npm install
```

4. Start the server:

```bash
npm run dev
```

5. API base URL: `http://localhost:5000/api`

### Example API routes

- `POST /api/auth/register`
- `POST /api/auth/login`
- `POST /api/auth/logout`
- `GET /api/auth/profile`
- `GET /api/crypto`
- `GET /api/crypto/gainers`
- `GET /api/crypto/new`
- `POST /api/crypto`

---

Push your backend code to GitHub Classroom, deploy the backend (recommended: Render), and integrate it into your Coinbase clone frontend repository. After completing the integration, deploy the updated frontend as well. Finally, submit the links to your deployed backend, deployed frontend, and your updated Coinbase clone repository via the Google Form attached.

**NOTE:** Ensure that all submitted links are accurate and working, as no marks will be awarded for invalid or inaccessible submissions.
