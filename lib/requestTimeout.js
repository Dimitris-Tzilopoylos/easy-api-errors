const BaseError = require("./baseError");

class RequestTimeout extends BaseError {
  constructor(message = "Request Timeout") {
    super("RequestTimeout", message, 408);
  }
}

module.exports = RequestTimeout;
