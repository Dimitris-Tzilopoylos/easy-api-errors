export = Forbidden;
declare class Forbidden extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
