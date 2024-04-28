const BaseError = require("./baseError");

class UnsupportedMediaType extends BaseError {
  constructor(message = "Unsupported Media Type") {
    super("UnsupportedMediaType", message, 415);
  }
}

module.exports = UnsupportedMediaType;
