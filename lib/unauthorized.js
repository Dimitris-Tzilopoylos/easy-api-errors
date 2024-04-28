const BaseError = require("./baseError");

class Unauthorized extends BaseError {
  constructor(message = "Unauthorized") {
    super("Unauthorized", message, 401);
  }
}

module.exports = Unauthorized;
