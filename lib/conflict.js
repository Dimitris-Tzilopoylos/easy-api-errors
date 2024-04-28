const BaseError = require("./baseError");

class Conflict extends BaseError {
  constructor(message = "Conflict") {
    super("Conflict", message, 409);
  }
}

module.exports = Conflict;
