# StellarStack Gemini AI Chat Template

A production-ready MERN stack template for building AI-powered chat applications, developed by StellarStackLtd. This template provides a robust foundation for creating interactive chat experiences using Google's Gemini Pro API, featuring modern authentication, real-time chat capabilities, and scalable architecture.

## Description

StellarStack AI Chat Template is a comprehensive solution for building AI chat applications, providing:

1. **User Authentication:**
   - Google OAuth V2 integration
   - Role-based access control
   - Secure session management

2. **Chat Features:**
   - AI-powered conversations using Google Gemini Pro
   - Rate limiting for non-authenticated users
   - Unlimited access for authenticated users
   - Chat history management

3. **Modern Architecture:**
   - MERN Stack (MongoDB, Express.js, React.js, Node.js)
   - Redux Toolkit for state management
   - Docker containerization
   - Scalable microservices architecture

## Quick Start

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- Docker (optional)
- Google Cloud Console account (for OAuth and Gemini API)

### Server Setup

1. Clone the template:

   ```bash
   git clone https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template.git
   ```

2. Navigate to the server directory:

   ```bash
   cd ./server
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure environment variables in `.env`:

   ```
   MONGO_USER=your_mongodb_username
   MONGO_PASS=your_mongodb_password
   GEMINI_API_KEY=your_gemini_api_key
   CLIENT_API_KEY=your_client_verify_api_key
   GEO_API_KEY=your_ipgeolocation_api_key
   LOCATION_API_KEY=your_geocode_api_key
   GOOGLE_CLIENT_ID=your_google_oauth_client_id
   GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   GOOGLE_OAUTH_REDIRECT_URL=your_google_oauth_redirect_url
   CLIENT_REDIRECT_URL="http://localhost:3000"
   ACCESS_TOKEN_JWT_SECRET=your_cookie_secret
   REFRESH_TOKEN_JWT_SECRET=your_cookie_secret
   ACCESS_TOKEN_EXPIRETIME=15m
   REFRESH_TOKEN_EXPIRETIME=7d
   APPLICATION_TYPE="development" or "production"
   COOKIE_DOMAIN=your_domain
   ```

5. Start the server:

   ```bash
   npm start
   ```

### Client Setup

1. Navigate to the public directory:

   ```bash
   cd ../client-fe
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Configure client environment variables in `.env`:

   ```
   REACT_APP_GEMINI_KEY=your_gemini_key
   REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id
   REACT_APP_GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret
   REACT_APP_GOOGLE_OAUTH_REDIRECT_URL=your_google_oauth_redirect_url
   REACT_APP_SERVER_ENDPOINT=http://localhost:3030
   ```

4. Start the client:

   ```bash
   npm start
   ```

### Docker Deployment

Deploy using Docker Compose:

```bash
docker-compose -f docker-compose.yaml up
```

## Features

- 🔐 Secure Authentication
- 🤖 AI-Powered Chat
- 📱 Responsive Design
- 🔄 Real-time Updates
- 📊 Analytics Integration
- 🌐 Location Services
- 🐳 Docker Support
- 🔍 Advanced Search
- 📝 Chat History
- ⚡ Performance Optimized

## Documentation

For detailed documentation, visit our [Wiki](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template/wiki).

## Support

- Documentation: [Wiki](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template/wiki)
- Issues: [GitHub Issues](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template/issues)
- Email: support@stellarstackltd.com

## License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

## Privacy & Legal

- [Privacy Policy](PRIVACY-POLICY.md)
- [Terms of Service](TERMS.md)
- [Disclaimer](DISCLAIMER.md)

## Dockerized Setup
This step assumes you have cloned the repo, copied/renamed app/.env.template to app/.env

cd to cloned repo dir
docker compose --env-file app/.env up --build

## Github CR Steps
Create github PAT with package-write rights

Create github PAT with package-read rights

```bash
docker login ghcr.io -u <github-username> -p <PAT-GithubWritePriviliges>
   ```

 ```bash
   cd <repo-dir>
   ```

```bash
docker build -t stellar-gemini-ai-chatapp-backend:v0.1    -f ./server/Dockerfile ./server
 ```

```bash
docker tag stellar-gemini-ai-chatapp-backend:v0.1    ghcr.io/stellarstack/stellar-gemini-ai-chatapp-backend:v0.1
 ```

```bash
docker push ghcr.io/stellarstack/stellar-gemini-ai-chatapp-backend:v0.1
 ```

```bash
docker build -t stellar-gemini-ai-chatapp-frontend:v0.1    -f ./client-fe/Dockerfile ./client-fe
 ```

```bash
docker tag stellar-gemini-ai-chatapp-frontend:v0.1    ghcr.io/stellarstack/stellar-gemini-ai-chatapp-frontend:v0.1
 ```

 ```bash
docker push ghcr.io/stellarstack/stellar-gemini-ai-chatapp-frontend:v0.1
 ```
---


Built with ❤️ by [StellarStackLtd](https://stellarstackltd.com) For [Nexlayer](https://nexlayer.com)

