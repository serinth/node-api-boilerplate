# Node API Boilerplate

Tried to keep this one simple. It has:

- Express with body-parser
- ES7 and ESLint
- iSparta for CI coverage
- Pre-commit hooks
- Nodemon for `dev`
- handy `config` util built in for different environments
- logging middleware with filtering

# Test Files

Test files should sit with their source and be in teh format `*.spec.js`.

# Dev Environment

`npm run dev`

# Production

Make sure you have a `dist` folder.

`npm run build`

`npm run start`

# Health and Info Endpoints

`localhost:3000/api/health`

`localhost:3000/api/info`