const BaseError = require("./baseError");

class TooEarly extends BaseError {
  constructor(message = "Too Early") {
    super("TooEarly", message, 425);
  }
}

module.exports = TooEarly;
