const BaseError = require("./baseError");

class HttpVersionNotSupported extends BaseError {
  constructor(message = "Http Version Not Supported") {
    super("HttpVersionNotSupported", message, 505);
  }
}

module.exports = HttpVersionNotSupported;
