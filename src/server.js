import express from 'express';
import cors from 'cors';
import config, {nodeEnvironment} from './config';
import health from './api/health';
import info from './api/info';
import http from 'http';
import winstonLogger from './middleware/winstonLogger';

export default function() {
  let app = express();
  const server = http.createServer(app);

  // 3rd party middleware
  app.use(cors({
    exposedHeaders: config.common.corsHeaders
  }));

  app.use(express.json({
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
  app.use(`/health`, health());
  app.use(`/info`, info());


  const service = server.listen(process.env.PORT || config.common.port);

  return service;
}
