const BaseError = require("./baseError");

class UpgradeRequired extends BaseError {
  constructor(message = "Upgrade Required") {
    super("UpgradeRequired", message, 426);
  }
}

module.exports = UpgradeRequired;
