const BaseError = require("./baseError");

class NotFound extends BaseError {
  constructor(message = "Not Found") {
    super("NotFound", message, 404);
  }
}

module.exports = NotFound;
