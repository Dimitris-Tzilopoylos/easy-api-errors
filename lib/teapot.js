const BaseError = require("./baseError");

class Teapot extends BaseError {
  constructor(message = "Teapot") {
    super("Teapot", message, 418);
  }
}

module.exports = Teapot;
