import { ExchangeService } from '../../moises/exchange/service/exchange.service';
import { CreateExchangeDTO } from '../../moises/exchange/dto/create-exchange.dto';
import { FindExchangeDTO } from '../../moises/exchange/dto/find-exchange.dto';

export class ExchangeController {
    constructor() {
        this._exService = new ExchangeService;
    }

    get(req, res) {
        let exService = new ExchangeService;
        return res.json(exService.get());
    }

    find(req, res) {
        let findDto = FindExchangeDTO.fromRequest(req);
        let exService = new ExchangeService;
        return res.json(exService.find(findDto));
    }

    create(req, res) {
        let createDto = CreateExchangeDTO.fromRequest(req);
        let exService = new ExchangeService;
        return res.json(exService.create(createDto));
    }
}