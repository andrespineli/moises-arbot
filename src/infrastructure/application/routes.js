import { Router } from 'express';
import { ExchangeController } from '../controller/exchange.controller';

const routes = new Router();
const exchangeController = new ExchangeController;

routes.get('/exchanges', exchangeController.get);
routes.get('/exchanges/:id', exchangeController.find);
routes.post('/exchanges', exchangeController.create);

export default routes;