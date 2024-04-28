const BaseError = require("./baseError");

class BadRequest extends BaseError {
  constructor(message = "Bad Request") {
    super("BadRequest", message, 400);
  }
}

module.exports = BadRequest;
