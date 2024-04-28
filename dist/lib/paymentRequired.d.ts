export = PaymentRequired;
declare class PaymentRequired extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
