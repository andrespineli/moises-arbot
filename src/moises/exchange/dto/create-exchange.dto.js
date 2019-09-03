import { InvalidValueException } from "../../shared/exception/invalid-value.exception";

export class CreateExchangeDTO {
    constructor(tag, name) {
        this._tag = tag;
        this._name = name;
        this.validate();
    }

    static fromRequest(req) {
        return new CreateExchangeDTO(
            req.body.tag,
            req.body.name
        );
    }

    validate() {
        if (!this._tag) {
            throw new InvalidValueException('Tag is required.');
        }

        if (!this._name) {
            throw new InvalidValueException('Name is required.');
        }
    }

    tag() {
        return this._tag;
    }

    name() {
        return this._name;
    }
}