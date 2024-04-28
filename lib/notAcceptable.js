const BaseError = require("./baseError");

class NotAcceptable extends BaseError {
  constructor(message = "Not Acceptable") {
    super("NotAcceptable", message, 406);
  }
}

module.exports = NotAcceptable;
