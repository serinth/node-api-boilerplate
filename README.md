# Node API Boilerplate

Tried to keep this one simple. It has:

- Express with body-parser
- ES2017 and ESLint
- iSparta for CI coverage
- Pre-commit hooks
- Nodemon for `dev`
- handy `config` util built in for different environments
- logging middleware with filtering

# Test Files

Test files should sit with their source and be in the format `*.spec.js`.

You can use nock and supertest for integration testing.

# Dev Environment

`npm run dev`

# Production

Make sure you have a `dist` folder.

`npm run build`

`npm run start`

# Health and Info Endpoints

`localhost:3000/health`

`localhost:3000/info`
