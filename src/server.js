import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import config, {nodeEnvironment} from './config';
import health from './api/health';
import info from './api/info';
import http from 'http';
import winstonLogger from './middleware/winstonLogger';

export default function() {
  let app = express();
  const version = 'v1';
  const server = http.createServer(app);

  // 3rd party middleware
  app.use(cors({
    exposedHeaders: config.common.corsHeaders
  }));

  app.use(bodyParser.json({
    limit: config.common.bodyLimit
  }));

  // internal middleware
  app.use(winstonLogger);

  if (nodeEnvironment !== 'production') {
    /*
    const devRoutes = {
      '/': ???
    };

    Object.keys(devRoutes).forEach( (route) => app.use(route,devRoutes[route]()));
    */
  }

  // health check and info check for autoscaling
  app.use(`/${version}/health`, health());
  app.use(`/${version}/info`, info());


  server.listen(process.env.PORT || config.common.port);

  return server;
}
