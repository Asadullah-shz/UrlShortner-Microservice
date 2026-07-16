# Gateway Service

The **Gateway Service** is the centralized entry point for the URL Shortener Microservice ecosystem. It acts as an API Gateway, routing incoming client requests to the appropriate backend microservices.

## Features

- **Reverse Proxy**: Routes traffic to downstream microservices using `http-proxy-middleware`:
  - `/api/auth` -> Auth Service
  - `/api/urls` -> URL Service
  - `/api/analytics` -> Analytics Service
- **Authentication Validation**: Validates JWT tokens on protected routes (`/api/urls`, `/api/analytics`) before proxying the requests to the respective services.
- **Rate Limiting**: Protects the API from abuse and DDoS attacks using `express-rate-limit`.
- **Security & CORS**: Implements Cross-Origin Resource Sharing (CORS) to control access.
- **Logging**: HTTP request logging via `morgan`.
- **Health Checks**: Provides a `/health` endpoint to monitor the gateway's status.
- **Centralized Error Handling**: Manages 404s and handles internal errors gracefully.

## Tech Stack

- **Node.js** & **Express**
- **http-proxy-middleware** (for routing and proxying)
- **jsonwebtoken** (for auth verification)
- **express-rate-limit**
- **morgan** (logger)
- **cors** & **dotenv**

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- The other microservices (Auth, URL, Analytics) should be running for the proxy endpoints to work.

### Installation

1. Navigate to the service directory:
   ```bash
   cd gateway-service
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables (create a `.env` file based on your configuration needs).

### Running the Service

- **Development mode**:
  ```bash
  npm run dev
  ```
  *(Uses nodemon to automatically restart the server upon changes)*

- **Production mode**:
  ```bash
  npm start
  ```

## Endpoints

| Route Prefix      | Proxied To            | Protected |
|-------------------|-----------------------|-----------|
| `/api/auth`       | Auth Service          | No        |
| `/api/urls`       | URL Service           | Yes       |
| `/api/analytics`  | Analytics Service     | Yes       |
| `/health`         | Gateway Health Check  | No        |
