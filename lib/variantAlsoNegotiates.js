const BaseError = require("./baseError");

class VariantAlsoNegotiates extends BaseError {
  constructor(message = "Variant Also Negotiates") {
    super("VariantAlsoNegotiates", message, 506);
  }
}

module.exports = VariantAlsoNegotiates;
