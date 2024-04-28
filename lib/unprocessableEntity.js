const BaseError = require("./baseError");

class UnprocessableEntity extends BaseError {
  constructor(message = "Unprocessable Entity") {
    super("UnprocessableEntity", message, 422);
  }
}

module.exports = UnprocessableEntity;
