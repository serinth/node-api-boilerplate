import {Router} from 'express';

export default () => {
  let router = Router();

  router.get('/', (req, res) => {
    res.json({status: 'OK'});
  });

  return router;
}
