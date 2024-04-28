const BaseError = require("./baseError");

class GatewayTimeout extends BaseError {
  constructor(message = "Gateway Timeout") {
    super("GatewayTimeout", message, 504);
  }
}

module.exports = GatewayTimeout;
