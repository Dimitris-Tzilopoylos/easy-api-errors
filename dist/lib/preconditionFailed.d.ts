export = PreconditionFailed;
declare class PreconditionFailed extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
