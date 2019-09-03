import { Router } from 'express';
import { ExchangeController } from '../controller/exchange.controller';

const routes = new Router();
const exchangeController = new ExchangeController;

routes.post('/exchanges', exchangeController.create);

export default routes;