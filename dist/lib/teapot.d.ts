export = Teapot;
declare class Teapot extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
