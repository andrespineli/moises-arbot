import { InvalidValueException } from "../../shared/exception/invalid-value.exception";

export class CreateAccountDTO {
    constructor(name, email, password) {
        this._name = name;
        this._email = email;
        this._password = password;
        this.validate();
    }

    static fromRequest(req) {
        return new CreateAccountDTO(
            req.body.name,
            req.body.email,
            req.body.password
        );
    }

    validate() {
        if (!this._name) {
            throw new InvalidValueException('Name is required.');
        }

        if (!this._email) {
            throw new InvalidValueException('E-mail is required.');
        }

        if (!this._password) {
            throw new InvalidValueException('Password is required.');
        }
    }

    name() {
        return this._name;
    }

    email() {
        return this._email;
    }

    password() {
        return this._password;
    }
}