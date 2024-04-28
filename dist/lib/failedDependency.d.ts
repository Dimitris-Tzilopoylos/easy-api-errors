export = FailedDependency;
declare class FailedDependency extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
