export = GatewayTimeout;
declare class GatewayTimeout extends BaseError {
    constructor(message?: string);
}
import BaseError = require("./baseError");
