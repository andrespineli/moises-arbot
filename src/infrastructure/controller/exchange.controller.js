import { ExchangeService } from '../../moises/exchange/service/exchange.service';
import { CreateExchangeDTO } from '../../moises/exchange/dto/create-exchange.dto';

export class ExchangeController {
    constructor() {
        this._exService = new ExchangeService;
    }

    create(req, res) {
        let createDto = CreateExchangeDTO.fromRequest(req);
        let exService = new ExchangeService;
        return res.json(exService.create(createDto));
    }
}