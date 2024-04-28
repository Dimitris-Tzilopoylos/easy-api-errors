export = Locked;
declare class Locked extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
