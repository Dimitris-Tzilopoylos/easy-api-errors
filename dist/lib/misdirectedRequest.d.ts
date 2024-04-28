export = MisdirectedRequest;
declare class MisdirectedRequest extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
