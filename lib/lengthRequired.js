const BaseError = require("./baseError");

class LengthRequired extends BaseError {
  constructor(message = "Length Required") {
    super("LengthRequired", message, 411);
  }
}

module.exports = LengthRequired;
