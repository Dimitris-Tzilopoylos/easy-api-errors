export = InternalServerError;
declare class InternalServerError extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
