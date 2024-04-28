export = Unauthorized;
declare class Unauthorized extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
