const BaseError = require("./baseError");

class ServiceUnavailable extends BaseError {
  constructor(message = "Service Unavailable") {
    super("ServiceUnavailable", message, 503);
  }
}

module.exports = ServiceUnavailable;
