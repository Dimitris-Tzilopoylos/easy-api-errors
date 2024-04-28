export = ExpectationFailed;
declare class ExpectationFailed extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
