export = Conflict;
declare class Conflict extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
