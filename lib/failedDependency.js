const BaseError = require("./baseError");

class FailedDependency extends BaseError {
  constructor(message = "Failed Dependency") {
    super("FailedDependency", message, 424);
  }
}

module.exports = FailedDependency;
