import { AccountService } from '../../moises/account/service/account.service';
import { CreateAccountDTO } from '../../moises/account/dto/create-account.dto';
import { FindAccountDTO } from '../../moises/account/dto/find-account.dto';


export class AccountController {
    constructor() {
        this._accService = new AccountService;
    }

    get(req, res) {
        let _accService = new AccountService;
        return res.json(_accService.get());
    }

    find(req, res) {
        let findDto = FindAccountDTO.fromRequest(req);
        let _accService = new AccountService;
        return res.json(_accService.find(findDto));
    }

    create(req, res) {
        let createDto = CreateAccountDTO.fromRequest(req);
        let _accService = new AccountService;
        return res.json(_accService.create(createDto));
    }
}