const BaseError = require("./baseError");

class BadGateway extends BaseError {
  constructor(message = "Bad Gateway") {
    super("BadGateway", message, 502);
  }
}

module.exports = BadGateway;
