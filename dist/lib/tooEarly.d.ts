export = TooEarly;
declare class TooEarly extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
