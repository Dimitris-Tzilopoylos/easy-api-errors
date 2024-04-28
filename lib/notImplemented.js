const BaseError = require("./baseError");

class NotImplemented extends BaseError {
  constructor(message = "Not Implemented") {
    super("NotImplemented", message, 501);
  }
}

module.exports = NotImplemented;
