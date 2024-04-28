const BaseError = require("./baseError");

class TooManyRequests extends BaseError {
  constructor(message = "Too Many Requests") {
    super("TooManyRequests", message, 429);
  }
}

module.exports = TooManyRequests;
