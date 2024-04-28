const BaseError = require("./baseError");

class PreconditionRequired extends BaseError {
  constructor(message = "Precondition Required") {
    super("PreconditionRequired", message, 428);
  }
}

module.exports = PreconditionRequired;
