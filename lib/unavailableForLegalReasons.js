const BaseError = require("./baseError");

class UnavailableForLegalReasons extends BaseError {
  constructor(message = "Unavailable For Legal Reasons") {
    super("UnavailableForLegalReasons", message, 451);
  }
}

module.exports = UnavailableForLegalReasons;
