export = URITooLong;
declare class URITooLong extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
