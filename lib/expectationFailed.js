const BaseError = require("./baseError");

class ExpectationFailed extends BaseError {
  constructor(message = "Expectation Failed") {
    super("ExpectationFailed", message, 417);
  }
}

module.exports = ExpectationFailed;
