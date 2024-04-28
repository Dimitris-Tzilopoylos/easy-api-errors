const BaseError = require("./baseError");

class PreconditionFailed extends BaseError {
  constructor(message = "Precondition Failed") {
    super("PreconditionFailed", message, 412);
  }
}

module.exports = PreconditionFailed;
