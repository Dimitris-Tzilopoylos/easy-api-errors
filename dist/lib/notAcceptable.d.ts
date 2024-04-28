export = NotAcceptable;
declare class NotAcceptable extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
