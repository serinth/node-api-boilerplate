import {Router} from 'express';
import config, {nodeEnvironment} from '../config';

export default () => {
  let router = Router();

  router.get('/', (req, res) => {
    res.json({
      apiVersion: config.common.apiVersion,
      environment: nodeEnvironment,
      logFile: config.logFile,
    });
  });

  return router;
}
