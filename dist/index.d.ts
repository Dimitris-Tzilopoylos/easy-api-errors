export = EasyApiErrors;
declare class EasyApiErrors {
  static errors: {
    badGateway: (message?: string) => BadGateway;
    badRequest: (message?: string) => BadRequest;
    conflict: (message?: string) => Conflict;
    expectationFailed: (message?: string) => ExpectationFailed;
    failedDependency: (message?: string) => FailedDependency;
    forbidden: (message?: string) => Forbidden;
    gatewayTimeout: (message?: string) => GatewayTimeout;
    gone: (message?: string) => Gone;
    httpVersionNotsupported: (message?: string) => HttpVersionNotSupported;
    insufficientStorage: (message?: string) => InsufficientStorage;
    internalServerError: (message?: string) => InternalServerError;
    lengthRequired: (message?: string) => LengthRequired;
    locked: (message?: string) => Locked;
    loopDetected: (message?: string) => LoopDetected;
    methodNotAllowed: (message?: string) => MethodNotAllowed;
    misdirectedRequest: (message?: string) => MisdirectedRequest;
    networkAuthenticationRequired: (
      message?: string
    ) => NetworkAuthenticationRequired;
    notAcceptable: (message?: string) => NotAcceptable;
    notFound: (message?: string) => NotFound;
    notExtended: (message?: string) => NotExtended;
    notImplemented: (message?: string) => NotImplemented;
    payloadTooLarge: (message?: string) => PayloadTooLarge;
    paymentRequired: (message?: string) => PaymentRequired;
    preconditionFailed: (message?: string) => PreconditionFailed;
    preconditionRequired: (message?: string) => PreconditionRequired;
    proxyAuthenticationRequired: (
      message?: string
    ) => ProxyAuthenticationRequired;
    rangeNotSatisfiable: (message?: string) => RangeNotSatisfiable;
    requestHeaderFieldsTooLarge: (
      message?: string
    ) => RequestHeadersFieldsTooLarge;
    requestTimeout: (message?: string) => RequestTimeout;
    serviceUnavailable: (message?: string) => ServiceUnavailable;
    teapot: (message?: string) => Teapot;
    tooEarly: (message?: string) => TooEarly;
    tooManyRequests: (message?: string) => TooManyRequests;
    unauthorized: (message?: string) => Unauthorized;
    unavailableForLegalReasons: (
      message?: string
    ) => UnavailableForLegalReasons;
    unprocessableEntity: (message?: string) => UnprocessableEntity;
    unsupportedMediaType: (message?: string) => UnsupportedMediaType;
    upgradeRequired: (message?: string) => UpgradeRequired;
    uriTooLong: (message?: string) => URITooLong;
    variantAlsoNegotiations: (message?: string) => VariantAlsoNegotiates;
  };
}
import BadGateway = require("./lib/badGateway");
import BadRequest = require("./lib/badRequest");
import Conflict = require("./lib/conflict");
import ExpectationFailed = require("./lib/expectationFailed");
import FailedDependency = require("./lib/failedDependency");
import Forbidden = require("./lib/forbidden");
import GatewayTimeout = require("./lib/gatewayTimeout");
import Gone = require("./lib/gone");
import HttpVersionNotSupported = require("./lib/httpVersionNotsupported");
import InsufficientStorage = require("./lib/insufficientStorage");
import InternalServerError = require("./lib/internalServerError");
import LengthRequired = require("./lib/lengthRequired");
import Locked = require("./lib/locked");
import LoopDetected = require("./lib/loopDetected");
import MethodNotAllowed = require("./lib/methodNotAllowed");
import MisdirectedRequest = require("./lib/misdirectedRequest");
import NetworkAuthenticationRequired = require("./lib/networkAuthenticationRequired");
import NotAcceptable = require("./lib/notAcceptable");
import NotFound = require("./lib/notFound");
import NotExtended = require("./lib/notExtended");
import NotImplemented = require("./lib/notImplemented");
import PayloadTooLarge = require("./lib/payloadTooLarge");
import PaymentRequired = require("./lib/paymentRequired");
import PreconditionFailed = require("./lib/preconditionFailed");
import PreconditionRequired = require("./lib/preconditionRequired");
import ProxyAuthenticationRequired = require("./lib/proxyAuthenticationRequired");
import RangeNotSatisfiable = require("./lib/rangeNotSatisfiable");
import RequestHeadersFieldsTooLarge = require("./lib/requestHeaderFieldsTooLarge");
import RequestTimeout = require("./lib/requestTimeout");
import ServiceUnavailable = require("./lib/serviceUnavailable");
import Teapot = require("./lib/teapot");
import TooEarly = require("./lib/tooEarly");
import TooManyRequests = require("./lib/tooManyRequests");
import Unauthorized = require("./lib/unauthorized");
import UnavailableForLegalReasons = require("./lib/unavailableForLegalReasons");
import UnprocessableEntity = require("./lib/unprocessableEntity");
import UnsupportedMediaType = require("./lib/unsupportedMediaType");
import UpgradeRequired = require("./lib/upgradeRequired");
import URITooLong = require("./lib/uriTooLong");
import VariantAlsoNegotiates = require("./lib/variantAlsoNegotiates");
