"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var TransportStream = require("winston-transport");
var BrowserConsole = /** @class */ (function (_super) {
    __extends(BrowserConsole, _super);
    function BrowserConsole(opts) {
        var _this = _super.call(this, opts) || this;
        _this.methods = {
            debug: "debug",
            error: "error",
            info: "info",
            warn: "warn"
        };
        if (opts && opts.level && Level.hasOwnProperty(opts.level)) {
            _this.level = opts.level;
        }
        return _this;
    }
    BrowserConsole.prototype.log = function (logEntry, next) {
        var _this = this;
        // (window as any).l = logEntry;
        setImmediate(function () {
            _this.emit("logged", logEntry);
        });
        var message = logEntry.message, level = logEntry.level;
        var mappedMethod = this.methods[level];
        if (Object.getOwnPropertySymbols(logEntry).length === 2)
            console[mappedMethod](message);
        else {
            // @ts-ignore
            var args = logEntry[Object.getOwnPropertySymbols(logEntry)[1]];
            args = args.length >= 1 ? args[0] : args;
            if (args)
                console[mappedMethod](message, args);
            else
                console[mappedMethod](message);
        }
        next();
    };
    return BrowserConsole;
}(TransportStream));
exports.default = BrowserConsole;
var Level;
(function (Level) {
    Level[Level["error"] = 0] = "error";
    Level[Level["warn"] = 1] = "warn";
    Level[Level["info"] = 2] = "info";
    Level[Level["debug"] = 4] = "debug";
})(Level || (Level = {}));
//# sourceMappingURL=BrowserConsole.js.map