var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BaseError = require("./baseError");
var MethodNotAllowed = /** @class */ (function (_super) {
    __extends(MethodNotAllowed, _super);
    function MethodNotAllowed(message) {
        if (message === void 0) { message = "Method Not Allowed"; }
        return _super.call(this, "MethodNotAllowed", message, 405) || this;
    }
    return MethodNotAllowed;
}(BaseError));
module.exports = MethodNotAllowed;