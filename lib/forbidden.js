const BaseError = require("./baseError");

class Forbidden extends BaseError {
  constructor(message = "Forbidden") {
    super("Forbidden", message, 403);
  }
}

module.exports = Forbidden;
