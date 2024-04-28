const BaseError = require("./baseError");

class Locked extends BaseError {
  constructor(message = "Locked") {
    super("Locked", message, 423);
  }
}

module.exports = Locked;
