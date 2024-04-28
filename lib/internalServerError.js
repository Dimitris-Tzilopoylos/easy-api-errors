const BaseError = require("./baseError");

class InternalServerError extends BaseError {
  constructor(message = "Internal Server Error") {
    super("InternalServerError", message, 500);
  }
}

module.exports = InternalServerError;
