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
var ExpectationFailed = /** @class */ (function (_super) {
    __extends(ExpectationFailed, _super);
    function ExpectationFailed(message) {
        if (message === void 0) { message = "Expectation Failed"; }
        return _super.call(this, "ExpectationFailed", message, 417) || this;
    }
    return ExpectationFailed;
}(BaseError));
module.exports = ExpectationFailed;
