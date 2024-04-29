# Easy API Errors

Easy API Errors is a library that provides a collection of HTTP error classes for Node.js applications. Each error class represents a specific HTTP error status code, making it easy to create and handle HTTP errors in your application.

## Installation

You can install Easy API Errors via npm:

```bash
npm install easy-api-errors
```

## Usage

```javascript
const EasyApiErrors = require("easy-api-errors");

// Throw the created error
throw EasyApiErrors.errors.badRequest("Invalid input");
```

## Available Errors

- **BadGateway**: 502 Bad Gateway
- **BadRequest**: 400 Bad Request
- **Conflict**: 409 Conflict
- **ExpectationFailed**: 417 Expectation Failed
- **FailedDependency**: 424 Failed Dependency
- **Forbidden**: 403 Forbidden
- **GatewayTimeout**: 504 Gateway Timeout
- **Gone**: 410 Gone
- **HttpVersionNotSupported**: 505 HTTP Version Not Supported
- **InsufficientStorage**: 507 Insufficient Storage
- **InternalServerError**: 500 Internal Server Error
- **LengthRequired**: 411 Length Required
- **Locked**: 423 Locked
- **LoopDetected**: 508 Loop Detected
- **MethodNotAllowed**: 405 Method Not Allowed
- **MisdirectedRequest**: 421 Misdirected Request
- **NetworkAuthenticationRequired**: 511 Network Authentication Required
- **NotAcceptable**: 406 Not Acceptable
- **NotFound**: 404 Not Found
- **NotExtended**: 510 Not Extended
- **NotImplemented**: 501 Not Implemented
- **PayloadTooLarge**: 413 Payload Too Large
- **PaymentRequired**: 402 Payment Required
- **PreconditionFailed**: 412 Precondition Failed
- **PreconditionRequired**: 428 Precondition Required
- **ProxyAuthenticationRequired**: 407 Proxy Authentication Required
- **RangeNotSatisfiable**: 416 Range Not Satisfiable
- **RequestHeadersFieldsTooLarge**: 431 Request Header Fields Too Large
- **RequestTimeout**: 408 Request Timeout
- **ServiceUnavailable**: 503 Service Unavailable
- **Teapot**: 418 I'm a teapot
- **TooEarly**: 425 Too Early
- **TooManyRequests**: 429 Too Many Requests
- **Unauthorized**: 401 Unauthorized
- **UnavailableForLegalReasons**: 451 Unavailable For Legal Reasons
- **UnprocessableEntity**: 422 Unprocessable Entity
- **UnsupportedMediaType**: 415 Unsupported Media Type
- **UpgradeRequired**: 426 Upgrade Required
- **URITooLong**: 414 URI Too Long
- **VariantAlsoNegotiates**: 506 Variant Also Negotiates

## API

### EasyApiErrors.errors.{errorName}(message)

Creates an instance of the specified HTTP error with the given message.

- **errorName**: The name of the error (e.g., "badRequest").
- **message**: The error message.
