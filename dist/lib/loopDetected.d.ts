export = LoopDetected;
declare class LoopDetected extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
