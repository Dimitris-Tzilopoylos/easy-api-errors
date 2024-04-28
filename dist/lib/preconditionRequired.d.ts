export = PreconditionRequired;
declare class PreconditionRequired extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
