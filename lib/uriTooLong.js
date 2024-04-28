const BaseError = require("./baseError");

class URITooLong extends BaseError {
  constructor(message = "URI Too Long") {
    super("URITooLong", message, 414);
  }
}

module.exports = URITooLong;
