const BaseError = require("./baseError");

class NetworkAuthenticationRequired extends BaseError {
  constructor(message = "Network Authentication Required") {
    super("NetworkAuthenticationRequired", message, 511);
  }
}

module.exports = NetworkAuthenticationRequired;
