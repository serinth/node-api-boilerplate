export default {
  development: {
    logFile: 'application.log',
    logLevel: 'debug'
  },
  local: {
    logFile: 'application.log',
    logLevel: 'debug'
  },
  production: {
    logFile: '%LOG_FILE_LOCATION%',
    logLevel: '%LOG_LEVEL%'
  },
  common: {
    port: 3000,
    apiVersion: 'v1',
    bodyLimit: '100kb',
    corsHeaders: ['Link'],
    reporting: {
      maskedRequestFields: ['mobileNumber']
    }
  }
};
