# Commands Reference

This file contains all commands you need to work with the Traffic Light composition project.

**Note**: Docker commands are not included. Dockerfiles are provided for CI/grading purposes only and should not be used for local development.

## Table of Contents

- [Installation](#installation)
- [Development](#development)
- [Building](#building)
- [Testing](#testing)
- [Code Quality](#code-quality)
- [Git Workflow](#git-workflow)
- [Troubleshooting](#troubleshooting)

## Installation

Install all project dependencies:

```bash
npm install
```

This installs Vite, Jest, ESLint, Prettier, and all other required dependencies.

## Development

Start the development server:

```bash
npm run dev
```

This starts the Vite development server on `http://localhost:5173`. Open this URL in your browser to see the application.

The dev server supports:
- Hot Module Replacement (HMR) for instant updates
- Fast refresh for JavaScript changes

## Building

Build the project for production:

```bash
npm run build
```

This command builds the production bundle with Vite and outputs optimized files to `dist/`.

Preview the production build locally:

```bash
npm run preview
```

This serves the built files from `dist/` so you can test the production build.

## Testing

Run all tests:

```bash
npm run test
```

Run tests in watch mode (re-runs on file changes):

```bash
npm run test:watch
```

Tests are located in `src/__tests__/` and use Jest with jsdom. Tests use fake timers to avoid waiting for actual durations.

## Code Quality

### Linting

Check code for linting errors:

```bash
npm run lint
```

This runs ESLint to check for code quality issues and potential bugs.

### Formatting

Format all code files:

```bash
npm run format
```

This runs Prettier to format all `.js`, `.jsx`, `.json`, `.css`, and `.md` files.

Check if files are formatted correctly (without modifying them):

```bash
npm run format:check
```

This is useful in CI/CD pipelines to ensure code is properly formatted.

## Git Workflow

### Initial Setup

If this is a new repository:

```bash
git init
git add .
git commit -m "feat: initial traffic light composition setup"
```

### Feature Development

Create a feature branch:

```bash
git checkout -b feature/traffic-light-implementation
```

Make your changes, then commit:

```bash
git add .
git commit -m "feat: implement traffic light with setTimeout and DOM manipulation"
```

Push to remote:

```bash
git push origin feature/traffic-light-implementation
```

### Before Committing

Always run these commands before committing:

```bash
npm run format
npm run lint
npm run test
```

This ensures your code is properly formatted, passes linting, and all tests pass.

## Troubleshooting

### npm install fails

**Problem**: Installation fails with errors

**Solution**:
```bash
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

### Port 5173 already in use

**Problem**: `npm run dev` fails because port 5173 is already in use

**Solution**: 
- Stop the process using port 5173, or
- Change the port in `vite.config.js`:
  ```js
  server: {
    port: 5174, // or any other available port
  }
  ```

### Tests fail

**Problem**: `npm run test` shows failing tests

**Solution**:
- Run `npm run test:watch` to see which tests fail
- Check test expectations match your implementation
- Ensure `setTimeout` cleanup is working
- Verify timer transitions are correct
- Make sure fake timers are set up in tests

### Linting errors

**Problem**: `npm run lint` shows errors

**Solution**:
- Run `npm run format` to auto-fix formatting issues
- Fix any remaining linting errors manually
- Check ESLint configuration in `eslint.config.js`

### Build fails

**Problem**: `npm run build` fails

**Solution**:
- Check that all imports are correct
- Ensure all required files exist
- Verify HTML structure is correct

### Timer not working

**Problem**: Traffic light doesn't transition colors

**Solution**:
- Verify `setTimeout` is being called
- Check that `renderLoop()` is called after transitions
- Ensure config object has correct structure
- Verify `currentColor` is being updated

### Memory leak warnings

**Problem**: Console shows warnings about memory leaks

**Solution**:
- Ensure `beforeunload` event listener is added
- Make sure cleanup calls `clearTimeout(timer)`
- Verify timer variable is stored before setTimeout

---

## Quick Reference

### Most Common Commands

```bash
# Start development
npm run dev

# Run tests
npm run test

# Check code quality
npm run lint
npm run format

# Build for production
npm run build
```

### Before Pushing Code

```bash
npm run format
npm run lint
npm run test
```

---

_For more details, see the README.md file._

