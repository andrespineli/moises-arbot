export class InvalidValueException {
    constructor(message, code = 422) {
        this.message = message;
        this.code = code;
    }
}