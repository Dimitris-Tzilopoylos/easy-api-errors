const BaseError = require("./baseError");

class PayloadTooLarge extends BaseError {
  constructor(message = "Payload Too Large") {
    super("PayloadTooLarge", message, 413);
  }
}

module.exports = PayloadTooLarge;
