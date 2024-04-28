const BadGateway = require("./lib/badGateway");
const BadRequest = require("./lib/badRequest");
const Conflict = require("./lib/conflict");
const ExpectationFailed = require("./lib/expectationFailed");
const FailedDependency = require("./lib/failedDependency");
const Forbidden = require("./lib/forbidden");
const GatewayTimeout = require("./lib/gatewayTimeout");
const Gone = require("./lib/gone");
const HttpVersionNotSupported = require("./lib/httpVersionNotsupported");
const InsufficientStorage = require("./lib/insufficientStorage");
const InternalServerError = require("./lib/internalServerError");
const LengthRequired = require("./lib/lengthRequired");
const Locked = require("./lib/locked");
const LoopDetected = require("./lib/loopDetected");
const MethodNotAllowed = require("./lib/methodNotAllowed");
const MisdirectedRequest = require("./lib/misdirectedRequest");
const NetworkAuthenticationRequired = require("./lib/networkAuthenticationRequired");
const NotAcceptable = require("./lib/notAcceptable");
const NotExtended = require("./lib/notExtended");
const NotFound = require("./lib/notFound");
const NotImplemented = require("./lib/notImplemented");
const PayloadTooLarge = require("./lib/payloadTooLarge");
const PaymentRequired = require("./lib/paymentRequired");
const PreconditionFailed = require("./lib/preconditionFailed");
const PreconditionRequired = require("./lib/preconditionRequired");
const ProxyAuthenticationRequired = require("./lib/proxyAuthenticationRequired");
const RangeNotSatisfiable = require("./lib/rangeNotSatisfiable");
const RequestHeadersFieldsTooLarge = require("./lib/requestHeaderFieldsTooLarge");
const RequestTimeout = require("./lib/requestTimeout");
const ServiceUnavailable = require("./lib/serviceUnavailable");
const Teapot = require("./lib/teapot");
const TooEarly = require("./lib/tooEarly");
const TooManyRequests = require("./lib/tooManyRequests");
const Unauthorized = require("./lib/unauthorized");
const UnavailableForLegalReasons = require("./lib/unavailableForLegalReasons");
const UnprocessableEntity = require("./lib/unprocessableEntity");
const UnsupportedMediaType = require("./lib/unsupportedMediaType");
const UpgradeRequired = require("./lib/upgradeRequired");
const URITooLong = require("./lib/uriTooLong");
const VariantAlsoNegotiates = require("./lib/variantAlsoNegotiates");

class EasyApiErrors {
  static errors = {
    badGateway: (message) => {
      return new BadGateway(message);
    },
    badRequest: (message) => {
      return new BadRequest(message);
    },
    conflict: (message) => {
      return new Conflict(message);
    },
    expectationFailed: (message) => {
      return new ExpectationFailed(message);
    },
    failedDependency: (message) => {
      return new FailedDependency(message);
    },
    forbidden: (message) => {
      return new Forbidden(message);
    },
    gatewayTimeout: (message) => {
      return new GatewayTimeout(message);
    },
    gone: (message) => {
      return new Gone(message);
    },
    httpVersionNotsupported: (message) => {
      return new HttpVersionNotSupported(message);
    },
    insufficientStorage: (message) => {
      return new InsufficientStorage(message);
    },
    internalServerError: (message) => {
      return new InternalServerError(message);
    },
    lengthRequired: (message) => {
      return new LengthRequired(message);
    },
    locked: (message) => {
      return new Locked(message);
    },
    loopDetected: (message) => {
      return new LoopDetected(message);
    },
    methodNotAllowed: (message) => {
      return new MethodNotAllowed(message);
    },
    misdirectedRequest: (message) => {
      return new MisdirectedRequest(message);
    },
    networkAuthenticationRequired: (message) => {
      return new NetworkAuthenticationRequired(message);
    },
    notAcceptable: (message) => {
      return new NotAcceptable(message);
    },
    notFound: (message) => {
      return new NotFound(message);
    },
    notExtended: (message) => {
      return new NotExtended(message);
    },
    notImplemented: (message) => {
      return new NotImplemented(message);
    },
    payloadTooLarge: (message) => {
      return new PayloadTooLarge(message);
    },
    paymentRequired: (message) => {
      return new PaymentRequired(message);
    },
    preconditionFailed: (message) => {
      return new PreconditionFailed(message);
    },
    preconditionRequired: (message) => {
      return new PreconditionRequired(message);
    },
    proxyAuthenticationRequired: (message) => {
      return new ProxyAuthenticationRequired(message);
    },
    rangeNotSatisfiable: (message) => {
      return new RangeNotSatisfiable(message);
    },
    requestHeaderFieldsTooLarge: (message) => {
      return new RequestHeadersFieldsTooLarge(message);
    },
    requestTimeout: (message) => {
      return new RequestTimeout(message);
    },
    serviceUnavailable: (message) => {
      return new ServiceUnavailable(message);
    },
    teapot: (message) => {
      return new Teapot(message);
    },
    tooEarly: (message) => {
      return new TooEarly(message);
    },
    tooManyRequests: (message) => {
      return new TooManyRequests(message);
    },
    unauthorized: (message) => {
      return new Unauthorized(message);
    },
    unavailableForLegalReasons: (message) => {
      return new UnavailableForLegalReasons(message);
    },
    unprocessableEntity: (message) => {
      return new UnprocessableEntity(message);
    },
    unsupportedMediaType: (message) => {
      return new UnsupportedMediaType(message);
    },
    upgradeRequired: (message) => {
      return new UpgradeRequired(message);
    },
    uriTooLong: (message) => {
      return new URITooLong(message);
    },
    variantAlsoNegotiations: (message) => {
      return new VariantAlsoNegotiates(message);
    },
  };
}

module.exports = EasyApiErrors;
