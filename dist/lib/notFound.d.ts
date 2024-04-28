export = NotFound;
declare class NotFound extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
