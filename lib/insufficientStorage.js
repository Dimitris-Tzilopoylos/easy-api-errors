const BaseError = require("./baseError");

class InsufficientStorage extends BaseError {
  constructor(message = "Insufficient Storage") {
    super("InsufficientStorage", message, 507);
  }
}

module.exports = InsufficientStorage;
