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
var LoopDetected = /** @class */ (function (_super) {
    __extends(LoopDetected, _super);
    function LoopDetected(message) {
        if (message === void 0) { message = "Loop Detected"; }
        return _super.call(this, "LoopDetected", message, 508) || this;
    }
    return LoopDetected;
}(BaseError));
module.exports = LoopDetected;
