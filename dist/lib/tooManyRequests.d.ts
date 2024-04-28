export = TooManyRequests;
declare class TooManyRequests extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
