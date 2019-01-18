var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as winston from "winston";
import * as Transport from 'winston-transport';
var BrowserConsole = /** @class */ (function (_super) {
    __extends(BrowserConsole, _super);
    function BrowserConsole(opts) {
        var _this = _super.call(this, opts) || this;
        _this.methods = {
            debug: 'debug',
            error: 'error',
            info: 'info',
            warn: 'warn',
        };
        // this.level = Level[Level.debug];
        if (opts && opts.level && Level.hasOwnProperty(opts.level)) {
            _this.level = opts.level;
        }
        else {
            // TODO this is not getting the level configured in winston.configure
            _this.level = winston.level;
        }
        return _this;
    }
    BrowserConsole.prototype.log = function (logEntry, callback) {
        var _this = this;
        window.l = logEntry;
        setImmediate(function () {
            _this.emit('logged', logEntry);
        });
        var incommingLevel = Level[logEntry.level];
        if (incommingLevel <= Level[this.level]) {
            var message = logEntry.message, level = logEntry.level;
            var mappedMethod = this.methods[level];
            if (Object.getOwnPropertySymbols(logEntry).length === 2)
                console[mappedMethod](message);
            else {
                // @ts-ignore
                var args = logEntry[Object.getOwnPropertySymbols(logEntry)[1]];
                args = args.length >= 1 ? args[0] : args;
                console[mappedMethod](message, args);
            }
        }
        callback();
    };
    return BrowserConsole;
}(Transport));
export default BrowserConsole;
var Level;
(function (Level) {
    Level[Level["error"] = 0] = "error";
    Level[Level["warn"] = 1] = "warn";
    Level[Level["info"] = 2] = "info";
    Level[Level["debug"] = 4] = "debug";
})(Level || (Level = {}));
//# sourceMappingURL=BrowserConsole.js.map