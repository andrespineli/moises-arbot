import { InvalidValueException } from "../../shared/exception/invalid-value.exception";

export class FindAccountDTO {
    constructor(id) {
        this._id = id;
        this.validate();
    }

    static fromRequest(req) {
        return new FindAccountDTO(
            req.params.id
        );
    }

    validate() {
        if (!this._id) {
            throw new InvalidValueException('Parameter id is required.');
        }
    }

    id() {
        return this._id;
    }
}