const BaseError = require("./baseError");

class MethodNotAllowed extends BaseError {
  constructor(message = "Method Not Allowed") {
    super("MethodNotAllowed", message, 405);
  }
}

module.exports = MethodNotAllowed;
