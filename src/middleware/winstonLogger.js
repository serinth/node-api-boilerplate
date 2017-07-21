import winston from 'winston';
import expressWinston from 'express-winston';
import loggingFilter from '../util/loggingFilter';
import config, {nodeEnvironment} from '../config';

export default function(req, res, next) {
  // disable console for production
  const transports = nodeEnvironment === 'production' ? [new (winston.transports.File)({filename: config.logFile})] : [
    new (winston.transports.Console)(),
    new (winston.transports.File)({filename: config.logFile}),
  ];

  const winstonLogger = expressWinston.logger({
    transports: transports,
    meta: true,
    msg: 'HTTP {{req.method}} {{req.url}}',
    expressFormat: true,
    responseFilter: loggingFilter.objectMaskFilter,
    requestFilter: loggingFilter.objectMaskFilter,
    ignoreRoute: loggingFilter.routeFilter
  });

  expressWinston.requestWhitelist.push('body');
  expressWinston.responseWhitelist.push('body');

  winstonLogger(req, res, next);
}
