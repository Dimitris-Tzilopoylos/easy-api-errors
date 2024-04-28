export = PayloadTooLarge;
declare class PayloadTooLarge extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
