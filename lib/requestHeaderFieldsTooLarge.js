const BaseError = require("./baseError");

class RequestHeadersFieldsTooLarge extends BaseError {
  constructor(message = "Request Headers Fields Too Large") {
    super("RequestHeadersFieldsTooLarge", message, 431);
  }
}

module.exports = RequestHeadersFieldsTooLarge;
