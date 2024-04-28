export = UnprocessableEntity;
declare class UnprocessableEntity extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
