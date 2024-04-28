var BadGateway = require("./lib/badGateway");
var BadRequest = require("./lib/badRequest");
var Conflict = require("./lib/conflict");
var ExpectationFailed = require("./lib/expectationFailed");
var FailedDependency = require("./lib/failedDependency");
var Forbidden = require("./lib/forbidden");
var GatewayTimeout = require("./lib/gatewayTimeout");
var Gone = require("./lib/gone");
var HttpVersionNotSupported = require("./lib/httpVersionNotsupported");
var InsufficientStorage = require("./lib/insufficientStorage");
var InternalServerError = require("./lib/internalServerError");
var LengthRequired = require("./lib/lengthRequired");
var Locked = require("./lib/locked");
var LoopDetected = require("./lib/loopDetected");
var MethodNotAllowed = require("./lib/methodNotAllowed");
var MisdirectedRequest = require("./lib/misdirectedRequest");
var NetworkAuthenticationRequired = require("./lib/networkAuthenticationRequired");
var NotAcceptable = require("./lib/notAcceptable");
var NotExtended = require("./lib/notExtended");
var NotFound = require("./lib/notFound");
var NotImplemented = require("./lib/notImplemented");
var PayloadTooLarge = require("./lib/payloadTooLarge");
var PaymentRequired = require("./lib/paymentRequired");
var PreconditionFailed = require("./lib/preconditionFailed");
var PreconditionRequired = require("./lib/preconditionRequired");
var ProxyAuthenticationRequired = require("./lib/proxyAuthenticationRequired");
var RangeNotSatisfiable = require("./lib/rangeNotSatisfiable");
var RequestHeadersFieldsTooLarge = require("./lib/requestHeaderFieldsTooLarge");
var RequestTimeout = require("./lib/requestTimeout");
var ServiceUnavailable = require("./lib/serviceUnavailable");
var Teapot = require("./lib/teapot");
var TooEarly = require("./lib/tooEarly");
var TooManyRequests = require("./lib/tooManyRequests");
var Unauthorized = require("./lib/unauthorized");
var UnavailableForLegalReasons = require("./lib/unavailableForLegalReasons");
var UnprocessableEntity = require("./lib/unprocessableEntity");
var UnsupportedMediaType = require("./lib/unsupportedMediaType");
var UpgradeRequired = require("./lib/upgradeRequired");
var URITooLong = require("./lib/uriTooLong");
var VariantAlsoNegotiates = require("./lib/variantAlsoNegotiates");
var EasyApiErrors = /** @class */ (function () {
    function EasyApiErrors() {
    }
    EasyApiErrors.errors = {
        badGateway: function (message) {
            return new BadGateway(message);
        },
        badRequest: function (message) {
            return new BadRequest(message);
        },
        conflict: function (message) {
            return new Conflict(message);
        },
        expectationFailed: function (message) {
            return new ExpectationFailed(message);
        },
        failedDependency: function (message) {
            return new FailedDependency(message);
        },
        forbidden: function (message) {
            return new Forbidden(message);
        },
        gatewayTimeout: function (message) {
            return new GatewayTimeout(message);
        },
        gone: function (message) {
            return new Gone(message);
        },
        httpVersionNotsupported: function (message) {
            return new HttpVersionNotSupported(message);
        },
        insufficientStorage: function (message) {
            return new InsufficientStorage(message);
        },
        internalServerError: function (message) {
            return new InternalServerError(message);
        },
        lengthRequired: function (message) {
            return new LengthRequired(message);
        },
        locked: function (message) {
            return new Locked(message);
        },
        loopDetected: function (message) {
            return new LoopDetected(message);
        },
        methodNotAllowed: function (message) {
            return new MethodNotAllowed(message);
        },
        misdirectedRequest: function (message) {
            return new MisdirectedRequest(message);
        },
        networkAuthenticationRequired: function (message) {
            return new NetworkAuthenticationRequired(message);
        },
        notAcceptable: function (message) {
            return new NotAcceptable(message);
        },
        notFound: function (message) {
            return new NotFound(message);
        },
        notExtended: function (message) {
            return new NotExtended(message);
        },
        notImplemented: function (message) {
            return new NotImplemented(message);
        },
        payloadTooLarge: function (message) {
            return new PayloadTooLarge(message);
        },
        paymentRequired: function (message) {
            return new PaymentRequired(message);
        },
        preconditionFailed: function (message) {
            return new PreconditionFailed(message);
        },
        preconditionRequired: function (message) {
            return new PreconditionRequired(message);
        },
        proxyAuthenticationRequired: function (message) {
            return new ProxyAuthenticationRequired(message);
        },
        rangeNotSatisfiable: function (message) {
            return new RangeNotSatisfiable(message);
        },
        requestHeaderFieldsTooLarge: function (message) {
            return new RequestHeadersFieldsTooLarge(message);
        },
        requestTimeout: function (message) {
            return new RequestTimeout(message);
        },
        serviceUnavailable: function (message) {
            return new ServiceUnavailable(message);
        },
        teapot: function (message) {
            return new Teapot(message);
        },
        tooEarly: function (message) {
            return new TooEarly(message);
        },
        tooManyRequests: function (message) {
            return new TooManyRequests(message);
        },
        unauthorized: function (message) {
            return new Unauthorized(message);
        },
        unavailableForLegalReasons: function (message) {
            return new UnavailableForLegalReasons(message);
        },
        unprocessableEntity: function (message) {
            return new UnprocessableEntity(message);
        },
        unsupportedMediaType: function (message) {
            return new UnsupportedMediaType(message);
        },
        upgradeRequired: function (message) {
            return new UpgradeRequired(message);
        },
        uriTooLong: function (message) {
            return new URITooLong(message);
        },
        variantAlsoNegotiations: function (message) {
            return new VariantAlsoNegotiates(message);
        },
    };
    return EasyApiErrors;
}());
module.exports = EasyApiErrors;
