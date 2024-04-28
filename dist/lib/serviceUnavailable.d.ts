export = ServiceUnavailable;
declare class ServiceUnavailable extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
