export = MethodNotAllowed;
declare class MethodNotAllowed extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
