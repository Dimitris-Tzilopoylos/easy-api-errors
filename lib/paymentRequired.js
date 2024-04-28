const BaseError = require("./baseError");

class PaymentRequired extends BaseError {
  constructor(message = "Payment Required") {
    super("PaymentRequired", message, 402);
  }
}

module.exports = PaymentRequired;
