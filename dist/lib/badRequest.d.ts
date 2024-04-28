export = BadRequest;
declare class BadRequest extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
