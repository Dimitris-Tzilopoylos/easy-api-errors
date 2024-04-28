export = InsufficientStorage;
declare class InsufficientStorage extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
