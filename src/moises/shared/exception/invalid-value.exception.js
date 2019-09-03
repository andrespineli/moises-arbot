export class InvalidValueException {
    constructor(message, code = 422) {
        this._message = message;
        this._code = code;
    }
}