const BaseError = require("./baseError");

class RangeNotSatisfiable extends BaseError {
  constructor(message = "Range Not Satisfiable") {
    super("RangeNotSatisfiable", message, 416);
  }
}

module.exports = RangeNotSatisfiable;
