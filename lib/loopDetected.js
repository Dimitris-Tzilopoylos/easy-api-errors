const BaseError = require("./baseError");

class LoopDetected extends BaseError {
  constructor(message = "Loop Detected") {
    super("LoopDetected", message, 508);
  }
}

module.exports = LoopDetected;
