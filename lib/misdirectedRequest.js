const BaseError = require("./baseError");

class MisdirectedRequest extends BaseError {
  constructor(message = "Misdirected Request") {
    super("MisdirectedRequest", message, 421);
  }
}

module.exports = MisdirectedRequest;
