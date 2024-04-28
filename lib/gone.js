const BaseError = require("./baseError");

class Gone extends BaseError {
  constructor(message = "Gone") {
    super("Gone", message, 410);
  }
}

module.exports = Gone;
