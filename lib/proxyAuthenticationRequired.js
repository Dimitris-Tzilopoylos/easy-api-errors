const BaseError = require("./baseError");

class ProxyAuthenticationRequired extends BaseError {
  constructor(message = "Proxy Authentication Required") {
    super("ProxyAuthenticationRequired", message, 407);
  }
}

module.exports = ProxyAuthenticationRequired;
