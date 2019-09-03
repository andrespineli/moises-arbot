import { Router } from 'express';
import { ExchangeController } from '../controller/exchange.controller';
import { AccountController } from '../controller/account.controller';

const routes = new Router();
const exchangeController = new ExchangeController;
const accountController = new AccountController;

routes.get('/exchanges', exchangeController.get);
routes.get('/exchanges/:id', exchangeController.find);
routes.post('/exchanges', exchangeController.create);

routes.get('/accounts', accountController.get);
routes.get('/accounts/:id', accountController.find);
routes.post('/accounts', accountController.create);

export default routes;