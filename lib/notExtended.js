const BaseError = require("./baseError");

class NotExtended extends BaseError {
  constructor(message = "Not Extended") {
    super("NotExtended", message, 510);
  }
}

module.exports = NotExtended;
