export = RequestTimeout;
declare class RequestTimeout extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
