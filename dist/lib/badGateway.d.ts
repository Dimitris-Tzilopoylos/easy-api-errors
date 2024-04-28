export = BadGateway;
declare class BadGateway extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
