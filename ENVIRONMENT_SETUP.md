# Environment Setup Guide

This guide explains how to set up environment variables for the StellarStack AI Chat MERN Template, from local development to production deployment.

## 📁 Environment Files Structure

```
Stellar-Ai-Chat-MERN-Template/
├── client-fe/
│   ├── .env.example          # Frontend environment template (safe to commit)
│   └── .env                  # Frontend environment variables (DO NOT COMMIT)
├── server/
│   ├── .env.example          # Backend environment template (safe to commit)
│   └── .env                  # Backend environment variables (DO NOT COMMIT)
├── nexlayer.yaml             # Production deployment config
├── docker-compose.yml        # Local development with Docker
└── ENVIRONMENT_SETUP.md      # This file
```

## 🚀 Quick Setup

### 1. Frontend Setup
```bash
cd client-fe
cp .env.example .env
# Edit .env with your actual values
```

### 2. Backend Setup
```bash
cd server
cp .env.example .env
# Edit .env with your actual values
```

## 📋 Required Environment Variables

### Frontend (.env)
```bash
# Google OAuth Configuration
REACT_APP_GOOGLE_CLIENT_ID=your_google_oauth_client_id_here
REACT_APP_GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret_here
REACT_APP_GOOGLE_OAUTH_REDIRECT_URL=http://localhost:3000/auth/google/callback

# Server Configuration
REACT_APP_SERVER_ENDPOINT=http://localhost:3030

# Gemini AI Configuration
REACT_APP_GEMINI_KEY=your_gemini_api_key_here
```

### Backend (.env)
```bash
# MongoDB Configuration
MONGO_USER=your_mongodb_username_here
MONGO_PASS=your_mongodb_password_here
MONGO_URL=mongodb+srv://your_username:your_password@your_cluster.mongodb.net/your_database?retryWrites=true&w=majority&appName=ChatAI

# Server Configuration
PORT=3030
CLIENT_REDIRECT_URL=http://localhost:3000

# API Keys
GEMINI_API_KEY=your_gemini_api_key_here
CLIENT_API_KEY=your_client_verify_api_key_here
GEO_API_KEY=your_ipgeolocation_api_key_here
LOCATION_API_KEY=your_geocode_api_key_here

# Google OAuth Configuration
GOOGLE_CLIENT_ID=your_google_oauth_client_id_here
GOOGLE_CLIENT_SECRET=your_google_oauth_client_secret_here
GOOGLE_OAUTH_REDIRECT_URL=http://localhost:3000/auth/google/callback

# JWT Configuration
ACCESS_TOKEN_JWT_SECRET=your_access_token_secret_key_here
REFRESH_TOKEN_JWT_SECRET=your_refresh_token_secret_key_here
ACCESS_TOKEN_EXPIRETIME=15m
REFRESH_TOKEN_EXPIRETIME=7d

# Application Configuration
APPLICATION_TYPE=development
COOKIE_DOMAIN=localhost
```

## 🔑 API Keys Required

### 1. Google OAuth
- **Google Cloud Console**: https://console.cloud.google.com/
- Create OAuth 2.0 credentials
- Add authorized redirect URIs:
  - `http://localhost:3000/auth/google/callback` (development)
  - `https://YOUR-APP-NAME.nexlayer.io/auth/google/callback` (production)

### 2. Gemini AI
- **Google AI Studio**: https://makersuite.google.com/app/apikey
- Generate API key for Gemini models
- Copy the key (starts with `AIza...`)

### 3. MongoDB Atlas
- **MongoDB Atlas**: https://cloud.mongodb.com/
- Create cluster and database user
- Get connection string
- Format: `mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority`

### 4. IP Geolocation
- **IP Geolocation API**: https://ipgeolocation.io/
- Sign up for API key
- Used for user location detection

### 5. Geocoding
- **Geocode API**: https://geocode.maps.co/
- Get API key for reverse geocoding
- Used for converting coordinates to addresses

## 🔒 Security Best Practices

### ✅ Do's
- Use `.env.example` files as templates
- Keep `.env` files in `.gitignore`
- Use strong, unique secrets for JWT
- Rotate API keys regularly
- Use environment-specific configurations
- Store secrets in secure vaults for production

### ❌ Don'ts
- Never commit `.env` files to version control
- Don't share API keys publicly
- Don't use default/weak secrets
- Don't hardcode values in source code
- Don't use the same secrets across environments

## 🌍 Environment-Specific Configurations

### Development
```bash
APPLICATION_TYPE=development
COOKIE_DOMAIN=localhost
CLIENT_REDIRECT_URL=http://localhost:3000
GOOGLE_OAUTH_REDIRECT_URL=http://localhost:3000/auth/google/callback
```

### Production
```bash
APPLICATION_TYPE=production
COOKIE_DOMAIN=yourdomain.com
CLIENT_REDIRECT_URL=https://yourdomain.com
GOOGLE_OAUTH_REDIRECT_URL=https://yourdomain.com/auth/google/callback
```

## 🐳 Docker Deployment

The project includes Docker support with environment variable injection:

```yaml
# docker-compose.yaml
services:
  client:
    env_file:
      - ./client-fe/.env
  server:
    env_file:
      - ./server/.env
```

### Production Deployment with Nexlayer

For production deployment, the `nexlayer.yaml` file uses environment variables from the `.env` files:

```yaml
application:
  name: "your-app-name"
  pods:
    - name: express
      envFile: "./server/.env"
      vars:
        MONGO_URL: "${MONGO_URL}"
        GEMINI_API_KEY: "${GEMINI_API_KEY}"
        # ... other variables
```

## 🔧 Troubleshooting

### Common Issues

1. **Environment variables not loading**
   - Ensure `.env` files are in correct locations
   - Check file permissions
   - Verify variable names match exactly

2. **CORS errors**
   - Check `CLIENT_REDIRECT_URL` configuration
   - Ensure frontend and backend URLs match
   - Verify OAuth redirect URIs

3. **Database connection failed**
   - Verify MongoDB connection string
   - Check network connectivity
   - Ensure database credentials are correct

4. **OAuth errors**
   - Check Google OAuth redirect URIs
   - Verify Client ID and Secret
   - Ensure OAuth consent screen is configured

5. **API key errors**
   - Verify API keys are copied correctly
   - Check API key permissions
   - Ensure keys are active and not expired

### Validation

- **Frontend**: Check browser console for environment variable errors
- **Backend**: Check server logs for missing environment variables
- **Database**: Test connection with MongoDB Compass or CLI
- **OAuth**: Test login flow in development first

## 🚀 Production Deployment Checklist

Before deploying to production:

- [ ] All API keys are valid and have proper permissions
- [ ] OAuth redirect URIs include production domain
- [ ] JWT secrets are strong and unique
- [ ] Database connection string is correct
- [ ] Environment variables are set to `production`
- [ ] SSL certificates are configured (if using custom domain)
- [ ] Rate limiting is configured
- [ ] Monitoring and logging are set up

## 📚 Additional Resources

- [React Environment Variables](https://create-react-app.dev/docs/adding-custom-environment-variables/)
- [Node.js Environment Variables](https://nodejs.org/en/learn/getting-started/environment-variables)
- [MongoDB Atlas Setup](https://docs.atlas.mongodb.com/getting-started/)
- [Google OAuth Setup](https://developers.google.com/identity/protocols/oauth2)
- [Docker Environment Variables](https://docs.docker.com/compose/environment-variables/)

## 🔄 Environment Variable Reference

### Frontend Variables (REACT_APP_*)
| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `REACT_APP_GEMINI_KEY` | Google Gemini API key | Yes | `AIzaSy...` |
| `REACT_APP_GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes | `123456789-...` |
| `REACT_APP_GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes | `GOCSPX-...` |
| `REACT_APP_GOOGLE_OAUTH_REDIRECT_URL` | OAuth redirect URI | Yes | `http://localhost:3000/auth/google/callback` |
| `REACT_APP_SERVER_ENDPOINT` | Backend API endpoint | Yes | `http://localhost:3030` |

### Backend Variables
| Variable | Description | Required | Example |
|----------|-------------|----------|---------|
| `MONGO_URL` | MongoDB connection string | Yes | `mongodb+srv://...` |
| `MONGO_USER` | MongoDB username | Yes | `admin` |
| `MONGO_PASS` | MongoDB password | Yes | `password123` |
| `GEMINI_API_KEY` | Google Gemini API key | Yes | `AIzaSy...` |
| `CLIENT_API_KEY` | Client verification key | Yes | `your-client-key` |
| `GEO_API_KEY` | IP geolocation API key | No | `abc123...` |
| `LOCATION_API_KEY` | Geocoding API key | No | `xyz789...` |
| `GOOGLE_CLIENT_ID` | Google OAuth Client ID | Yes | `123456789-...` |
| `GOOGLE_CLIENT_SECRET` | Google OAuth Client Secret | Yes | `GOCSPX-...` |
| `GOOGLE_OAUTH_REDIRECT_URL` | OAuth redirect URI | Yes | `http://localhost:3000/auth/google/callback` |
| `CLIENT_REDIRECT_URL` | Frontend URL | Yes | `http://localhost:3000` |
| `ACCESS_TOKEN_JWT_SECRET` | JWT access token secret | Yes | `your-secret-key` |
| `REFRESH_TOKEN_JWT_SECRET` | JWT refresh token secret | Yes | `your-refresh-secret` |
| `ACCESS_TOKEN_EXPIRETIME` | Access token expiry | Yes | `15m` |
| `REFRESH_TOKEN_EXPIRETIME` | Refresh token expiry | Yes | `7d` |
| `APPLICATION_TYPE` | Environment type | Yes | `development` or `production` |
| `COOKIE_DOMAIN` | Cookie domain | Yes | `localhost` or `yourdomain.com` |

## 🎯 Quick Reference Commands

### Local Development
```bash
# Install dependencies
cd server && npm install
cd ../client-fe && npm install

# Start development servers
cd server && npm run dev
cd ../client-fe && npm start
```

### Docker Development
```bash
# Start with Docker Compose
docker-compose up --build

# Stop containers
docker-compose down
```

### Production Deployment
```bash
# Build and push Docker images
docker build -t your-app-backend ./server
docker build -t your-app-frontend ./client-fe

# Deploy to Nexlayer
# (Use the nexlayer.yaml configuration)
```

---

**Remember**: Always keep your `.env` files secure and never commit them to version control. Use `.env.example` files as templates for team members and contributors. 