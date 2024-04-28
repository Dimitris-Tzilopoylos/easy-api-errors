export = UpgradeRequired;
declare class UpgradeRequired extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
