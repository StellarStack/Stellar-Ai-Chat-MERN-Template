# Contributing to StellarStack AI Chat Template

Thank you for your interest in contributing to StellarStack AI Chat Template! This document provides guidelines and instructions for contributing to this project.

## Code of Conduct

By participating in this project, you agree to abide by our Code of Conduct. Please read it before contributing.

## How to Contribute

### Reporting Bugs

1. Check if the bug has already been reported in the Issues section
2. If not, create a new issue with a clear title and description
3. Include steps to reproduce the bug
4. Add screenshots if applicable
5. Specify your environment (OS, browser, Node.js version, etc.)

### Suggesting Features

1. Check if the feature has already been suggested in the Issues section
2. If not, create a new issue with a clear title and description
3. Explain why this feature would be useful
4. Include any relevant examples or mockups

### Pull Requests

1. Fork the repository
2. Create a new branch for your feature/fix
3. Make your changes
4. Write or update tests as needed
5. Ensure all tests pass
6. Update documentation if necessary
7. Submit a pull request

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/StellarStackLtd/ai-chat-template.git
   ```

2. Install dependencies:
   ```bash
   # Server
   cd server
   npm install

   # Client
   cd ../public
   npm install
   ```

3. Set up environment variables (see README.md)

4. Start development servers:
   ```bash
   # Server
   cd server
   npm run dev

   # Client
   cd ../public
   npm start
   ```

### Code Style

- Follow the existing code style
- Use ESLint and Prettier for code formatting
- Write meaningful commit messages
- Keep commits focused and atomic

### Testing

- Write tests for new features
- Ensure all tests pass before submitting PR
- Update tests when modifying existing features

### Documentation

- Update README.md if needed
- Add JSDoc comments for new functions
- Update API documentation if changing endpoints

## Getting Help

- Check the [Wiki](https://github.com/StellarStackLtd/ai-chat-template/wiki)
- Open an issue for questions
- Contact support@stellarstackltd.com

## License

By contributing to this project, you agree that your contributions will be licensed under the project's MIT License. 