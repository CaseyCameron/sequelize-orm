import { Router } from 'express';
import Film from '../models/Film';

export default Router()
  .post('/', async (req, res, next) => {
    Film.create(req.body)
      .then(film => res.send(film))
      .catch(next);
  });
