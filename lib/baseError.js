class BaseError extends Error {
  constructor(name, message, status) {
    super(message);
    // this.stack = new Error().stack;
    this.name = name;
    this.status = status;
  }
}

module.exports = BaseError;
