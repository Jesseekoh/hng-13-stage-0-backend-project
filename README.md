# HNG-13 Stage 0 Project: Profile API

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Documentation](#api-documentation)
- [Configuration](#configuration)
- [Tech Stack](#tech-stack)
- [Contributing](#contributing)

## 🚀 Overview

This project is a RESTful API built with Node.js and Express that exposes a single endpoint returning user profile information combined with interesting cat facts from the [Cat Facts API](https://catfact.ninja/).

[view Live Demo](https://hng-13-stage-0-backend-project-production.up.railway.app/me)

## ✨ Features

- User profile endpoint with personal information
- Integration with external Cat Facts API
- Configurable timeout for external API calls
- Environment-based configuration
- TypeScript support
- Error handling for external API failures

## 🛠 Installation

### Prerequisites

- Node.js (v16 or higher)
- pnpm (recommended) or npm

### Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd stage-0-project
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Environment Configuration**

   Create a `.env` file in the root directory:
   ```env
   PORT=3000
   ```

   Or copy from the sample:
   ```bash
   cp .env.sample .env
   ```

4. **Start the server**

   **Development mode:**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

   **Production mode:**
   ```bash
   pnpm start
   # or
   npm start
   ```

The server will start on the port specified in your `.env` file or default to port 5000.

## 📖 Usage

Once the server is running, you can access the API at:
```
http://localhost:<PORT>
```

## 📚 API Documentation

### Base URL
```
http://localhost:<PORT>
```

### Endpoints

#### GET /me

Retrieves user profile information along with a random cat fact.

**Request:**
```http
GET /me
```

**Response:**

**Success (200 OK):**
```json
{
  "status": "success",
  "user": {
    "email": "Jesseekoh@outlook.com",
    "name": "Jesse Ekoh-Ordan",
    "stack": "Node.js/Express"
  },
  "timestamp": "2024-12-19T10:30:00.000Z",
  "fact": "A cat's hearing is better than a dog's. And a cat can hear high-frequency sounds up to two octaves higher than a human."
}
```

**Error Scenarios:**

If the external Cat Facts API is unavailable or times out, the endpoint will still return user information with the default cat fact. The default cat fact is "A cat's hearing is better than a dog's. And a cat can hear high-frequency sounds up to two octaves higher than a human."

**Response Fields:**

| Field | Type | Description |
|-------|------|-------------|
| `status` | string | Response status indicator |
| `user` | object | User profile information |
| `user.email` | string | User's email address |
| `user.name` | string | User's full name |
| `user.stack` | string | User's tech stack |
| `timestamp` | string | ISO 8601 formatted timestamp |
| `fact` | string | Random cat fact from external API |

### Rate Limiting

Maximum 100 requests per 15 minutes.

### Error Handling

The API implements graceful error handling for:
- External API timeouts (5-second timeout for cat facts)
- Network connectivity issues
- Invalid requests

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Default | Required |
|----------|-------------|---------|----------|
| `PORT` | Server port number | 5000 | No |

### API Configuration

- **External API Timeout:** 5 seconds for Cat Facts API
- **Default Port:** 5000 (if not specified in environment)

## 🛠 Tech Stack

- **Runtime:** Node.js
- **Framework:** Express.js
- **Language:** TypeScript
- **HTTP Client:** Axios
- **Environment Management:** dotenv
- **Package Manager:** pnpm


### Dependencies

**Production:**
- `express` (^5.1.0) - Web framework
- `axios` (^1.12.2) - HTTP client for external API calls
- `cors` (^2.8.5) - Cross-Origin Resource Sharing middleware
- `dotenv` (^17.2.3) - Environment variable management
- `express-rate-limit` (^8.1.0) - Rate limiting middleware
- `pino` (^10.0.0) - Fast JSON logger
- `pino-http` (^11.0.0) - HTTP request logger for Pino
- `pino-pretty` (^13.1.2) - Pretty printer for Pino logs

**Development:**
- `@types/cors` (^2.8.19) - TypeScript definitions for cors
- `@types/express` (^5.0.3) - TypeScript definitions for Express
- `@types/node` (^24.7.2) - TypeScript definitions for Node.js
- `ts-node-dev` (^2.0.0) - Development server with hot reload
- `typescript` (^5.9.3) - TypeScript compiler

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm start` - Start production server
- `pnpm test` - Run tests (not implemented yet)


**Author:** Jesse Ekoh-Ordan
**Email:** Jesseekoh@outlook.com
**Stack:** Node.js/Express
