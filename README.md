# StellarStack Gemini AI Chat Template
A production-ready MERN stack template for building AI-powered chat applications, developed with ❤️ by Team [StellarStackLtd](https://stellarstack.co) For [Nexlayer](https://nexlayer.com) Community. This template provides a robust foundation for creating interactive chat experiences using Google's Gemini Pro API, featuring modern authentication, real-time chat capabilities, and scalable architecture.

## 📋 Table of Contents

- [Quick Start](#-quick-start-from-zero-to-production-in-15-minutes)
- [Features](#-features)
- [System Requirements](#-system-requirements)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Development](#-development)
- [Testing](#-testing)
- [Deployment](#-deployment)
- [API Documentation](#-api-documentation)
- [Contributing](#-contributing)
- [Support](#-support)
- [License](#-license)

## 🚀 Quick Start: From Zero to Production in 15 Minutes

Welcome! You're about to deploy your very own AI-powered chat application to the Nexlayer. By the end of this tutorial, you'll have a live website that anyone can visit and chat with AI.

### What You're Building

Your app will have three awesome features:
- **Smart AI Chat** - Users can have conversations with Google's Gemini AI
- **Google Login** - Secure authentication so users can save their chat history
- **Live on the Internet** - Anyone can visit your custom URL and use your app

### Before We Start

You'll need:
- A GitHub account (free)
- 15 minutes of your time
- Zero experience with cloud deployment (we'll teach you everything!)

### Step 1: Get Your Free Google API Keys (5 minutes)

#### 🤖 Get Your Google Gemini AI Key
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key" - it's the big blue button
4. Copy your key - it starts with `AIza...`

#### 🔐 Get Your Google OAuth Keys
1. Visit [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project: Click "Select a project" → "New Project"
3. Enable OAuth: Go to "APIs & Services" → "Credentials" → "Create Credentials" → "OAuth 2.0 Client ID"
4. Set up redirect URIs:
   - `http://localhost:3030/auth/google/callback`
   - `https://YOUR-APP-NAME.nexlayer.io/auth/google/callback`
5. Save your Client ID and Client Secret

### Step 2: Fork the Code (2 minutes)
1. Visit the template: [Stellar-Ai-Chat-MERN-Template](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template)
2. Click "Fork" in the top-right corner
3. Choose your account as the destination

### Step 3: Configure Your App (3 minutes)
1. Clone your fork: `git clone https://github.com/YOUR-USERNAME/Stellar-Ai-Chat-MERN-Template.git`
2. Open `nexlayer.yaml` and replace placeholder values with your real API keys
3. Choose your unique app name (becomes part of your website URL)

### Step 4: Set Up Automatic Deployment (3 minutes)
1. Create a GitHub Personal Access Token with `write:packages` and `read:packages` permissions
2. Add the token to your repository secrets as `GHCR_TOKEN_RW`
3. Enable "Read and write permissions" in Actions settings

### Step 5: Deploy to Production (2 minutes)
1. Push your changes: `git add . && git commit -m "Configure deployment" && git push`
2. Watch the magic happen in GitHub Actions
3. Your app is live at: `https://YOUR-APP-NAME.nexlayer.io`

🎉 **Congratulations! You've just deployed a production-ready AI application to the cloud!**

## 📁 Recommended Project Structure

```
project/
├── client-fe/          # Frontend React app
├── server/             # Backend Express app
├── nexlayer.yaml       # Main deployment config
├── docker-compose.yml  # Local development
└── .github/workflows/
    └── build_and_deploy.yml       # CI/CD build and deploy to nexlayer pipeline
    └── ci.yml        # CI/CD pipeline
```

## 🔧 Key Configuration Patterns

- **Multi-service apps**: Separate containers for frontend/backend
- **Database setup**: Use platform images with init scripts
- **Environment management**: Pod-level variable scoping
- **Routing**: Avoid path conflicts between services

## 🧠 Knowledge Sharing Opportunities

- **Template Complexity**: This represents advanced use case vs. Hello World
- **Scalability Patterns**: Multi-pod deployments with proper service communication
- **DevOps Integration**: Full CI/CD with image building and deployment automation
- **Security Best Practices**: Secret management and access control patterns

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

## 🗺️ Architecture Overview

![stellar-stack-mern-ai-chat-stack](https://github.com/user-attachments/assets/b415672c-e296-4ecb-a2ef-18a255c5347d)

This structure shows you how Nexlayer organizes your application into distinct, manageable pieces. Each pod has its own responsibility and configuration, but they all work together as one cohesive app.

### How Your Stack Connects Automatically
Here's the magic of Nexlayer - all these services discover and connect to each other automatically. This diagram shows exactly how data flows through your application:

## 💻 System Requirements

### Minimum Requirements
- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **MongoDB**: 6.0 or higher (local or Atlas)
- **Git**: 2.x or higher

### Recommended
- **Docker**: 20.x or higher (for containerized development)
- **Docker Compose**: 2.x or higher
- **RAM**: 4GB or more
- **Storage**: 2GB free space

### Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 🛠️ Installation

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Docker (optional)
- Google Cloud Console account (for OAuth and Gemini API)

### Quick Installation

```bash
# Clone the repository
git clone https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template.git
cd Stellar-Ai-Chat-MERN-Template

# Install dependencies
cd server && npm install
cd ../client-fe && npm install

# Set up environment variables
cp server/.env.example server/.env
cp client-fe/.env.example client-fe/.env

# Edit the .env files with your configuration
# See ENVIRONMENT_SETUP.md for detailed instructions
```

## ⚙️ Configuration

### Environment Variables

The application uses environment variables for configuration. See [ENVIRONMENT_SETUP.md](ENVIRONMENT_SETUP.md) for detailed setup instructions.

### Key Configuration Files

- `nexlayer.yaml` - Production deployment configuration
- `docker-compose.yml` - Local development with Docker
- `server/.env` - Backend environment variables
- `client-fe/.env` - Frontend environment variables

## 🚀 Development

### Local Development

```bash
# Start the backend server
cd server
npm run dev

# In a new terminal, start the frontend
cd client-fe
npm start
```

### Docker Development

```bash
# Start all services with Docker Compose
docker-compose up --build

# Stop all services
docker-compose down
```

### Development Scripts

#### Backend (server/)
```bash
npm run dev      # Start development server with nodemon
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

#### Frontend (client-fe/)
```bash
npm start        # Start development server
npm run build    # Build for production
npm test         # Run tests
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🧪 Testing

### Running Tests

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client-fe
npm test

# Run all tests
npm run test:all
```

### Test Coverage

The project includes comprehensive test coverage for both frontend and backend components.

### CI/CD Testing

GitHub Actions automatically runs tests on every push and pull request:
- Unit tests for both frontend and backend
- Integration tests
- Build verification
- Code quality checks

## 🚀 Deployment

### Nexlayer Deployment (Recommended)

The template is optimized for deployment on Nexlayer with automatic CI/CD:

1. **Fork the repository**
2. **Configure environment variables** in `nexlayer.yaml`
3. **Set up GitHub secrets** for automated deployment
4. **Push to main branch** - automatic deployment triggers

### Manual Deployment

```bash
# Build Docker images
docker build -t your-app-backend ./server
docker build -t your-app-frontend ./client-fe

# Deploy to your preferred platform
# See platform-specific documentation
```

### Deployment Options

- **Nexlayer** (recommended) - Optimized for this template
- **Heroku** - Easy deployment with Git integration
- **AWS** - Scalable cloud infrastructure
- **Google Cloud** - Enterprise-grade hosting
- **Vercel** - Frontend deployment
- **Railway** - Full-stack deployment

## 📚 API Documentation

### Backend API Endpoints

#### Authentication
- `POST /v1/auth/google` - Google OAuth authentication
- `POST /v1/auth/refresh` - Refresh access token
- `GET /v1/auth/logout` - User logout

#### Chat
- `POST /v1/gemini/api/chat` - Send message to AI
- `GET /v1/gemini/api/getchathistory` - Get user's chat history
- `POST /v1/gemini/api/chatdata` - Get specific chat data

#### User Management
- `POST /v1/user/location` - Update user location
- `GET /v1/user/profile` - Get user profile

### Frontend API Integration

The frontend uses Redux Toolkit for state management and API calls. See the store files in `client-fe/src/store/` for implementation details.

## 🔑 API Keys Required

### 1. Google OAuth
- **Google Cloud Console**: https://console.cloud.google.com/
- Create OAuth 2.0 credentials
- Add authorized redirect URIs

### 2. Gemini AI
- **Google AI Studio**: https://makersuite.google.com/app/apikey
- Generate API key for Gemini models

### 3. MongoDB Atlas
- **MongoDB Atlas**: https://cloud.mongodb.com/
- Create cluster and database user
- Get connection string

### 4. IP Geolocation
- **IP Geolocation API**: https://ipgeolocation.io/
- Sign up for API key

### 5. Geocoding
- **Geocode API**: https://geocode.maps.co/
- Get API key for reverse geocoding

## 🔒 Security Best Practices

### ✅ Do's
- Use `.env.example` files as templates
- Keep `.env` files in `.gitignore`
- Use strong, unique secrets for JWT
- Rotate API keys regularly
- Use environment-specific configurations

### ❌ Don'ts
- Never commit `.env` files to version control
- Don't share API keys publicly
- Don't use default/weak secrets
- Don't hardcode values in source code

## 🐳 Docker & GitHub Container Registry

### GitHub CR Steps
Create GitHub PAT with package-write rights:

```bash
docker login ghcr.io -u <github-username> -p <PAT-GithubWritePrivileges>
```

Build and push backend:
```bash
cd <repo-dir>
docker build -t stellar-gemini-ai-chatapp-backend:v0.1 -f ./server/Dockerfile ./server
docker tag stellar-gemini-ai-chatapp-backend:v0.1 ghcr.io/stellarstack/stellar-gemini-ai-chatapp-backend:v0.1
docker push ghcr.io/stellarstack/stellar-gemini-ai-chatapp-backend:v0.1
```

Build and push frontend:
```bash
docker build -t stellar-gemini-ai-chatapp-frontend:v0.1 -f ./client-fe/Dockerfile ./client-fe
docker tag stellar-gemini-ai-chatapp-frontend:v0.1 ghcr.io/stellarstack/stellar-gemini-ai-chatapp-frontend:v0.1
docker push ghcr.io/stellarstack/stellar-gemini-ai-chatapp-frontend:v0.1
```

## 🔧 Troubleshooting Common Issues

### "Permission Denied" Error
- Double-check your `GHCR_TOKEN_RW` secret is set correctly
- Make sure you enabled "Read and write permissions" in Actions settings

### "OAuth Redirect Mismatch"
- Go back to Google Cloud Console
- Add your exact Nexlayer URL to the authorized redirect URIs
- Make sure there are no typos in your app name

### "API Key Invalid"
- Double-check your Gemini API key in `nexlayer.yaml`
- Make sure you copied the entire key without extra spaces
- Verify the key works by testing it in Google AI Studio

### "Build Failed"
- Check that both `server/` and `client-fe/` folders have `package.json` files
- Make sure you ran `npm install` in both directories
- Look at the GitHub Actions logs for specific error messages

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### How to Contribute

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**
4. **Run tests**: `npm test`
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style
- Write tests for new features
- Update documentation as needed
- Ensure all tests pass before submitting

### Issue Templates

We provide issue templates for:
- [Bug Reports](.github/ISSUE_TEMPLATE/bug_report.md)
- [Feature Requests](.github/ISSUE_TEMPLATE/feature_request.md)

## 📖 Documentation

- [Environment Setup Guide](ENVIRONMENT_SETUP.md) - Detailed environment configuration
- [Contributing Guidelines](CONTRIBUTING.md) - How to contribute to the project
- [Code of Conduct](CODE_OF_CONDUCT.md) - Community guidelines
- [Changelog](CHANGELOG.md) - Version history and updates
- [Privacy Policy](PRIVACY-POLICY.md) - Privacy and data handling
- [Disclaimer](DISCLAIMER.md) - Legal disclaimers

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
- 🧪 Comprehensive Testing
- 🔄 CI/CD Pipeline
- 📚 API Documentation
- 🌍 Multi-environment Support

## 🚀 Next Steps

Now that your app is live, here are some exciting directions to explore:

### Learn More About the Stack
- **React (Frontend)**: Build interactive user interfaces
- **Express.js (Backend)**: Create REST APIs
- **MongoDB (Database)**: Store and query data efficiently

### Expand Your App
- Add more AI features (image generation, text-to-speech)
- Improve user experience (real-time chat, push notifications)
- Scale your app (caching, rate limiting, monitoring)

### Deploy More Apps
- Build a todo app with real-time collaboration
- Create an e-commerce site with payments
- Make a social media platform
- Build a dashboard for data visualization

## Documentation

For detailed documentation, visit our [Nexlayer Docs](https://docs.nexlayer.com/).

## Support

- Documentation: [Environment Setup Guide](ENVIRONMENT_SETUP.md)
- Issues: [GitHub Issues](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template/issues)
- Email: support@stellarstackltd.com
- Community: [GitHub Discussions](https://github.com/StellarStack/Stellar-Ai-Chat-MERN-Template/discussions)

## 📄 License

This template is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [Google Gemini AI](https://ai.google.dev/) for providing the AI capabilities
- [Nexlayer](https://nexlayer.com/) for the deployment platform
- [React](https://reactjs.org/) and [Express.js](https://expressjs.com/) communities
- All contributors and supporters of this project

## Privacy & Legal

- [Privacy Policy](PRIVACY-POLICY.md)
- [Terms of Service](TERMS.md)
- [Disclaimer](DISCLAIMER.md)

---

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js](https://img.shields.io/badge/Node.js-18.x-green.svg)](https://nodejs.org/)
[![React](https://img.shields.io/badge/React-18.2.0-blue.svg)](https://reactjs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-8.1.3-green.svg)](https://mongodb.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)](https://docker.com/)
[![Nexlayer](https://img.shields.io/badge/Deploy%20on-Nexlayer-orange.svg)](https://nexlayer.com/)

**Built with ❤️ using the [StellarStackLtd](https://stellarstack.co) AI Chat Template**
