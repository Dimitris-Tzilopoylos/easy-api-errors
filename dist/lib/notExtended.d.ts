export = NotExtended;
declare class NotExtended extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
