import * as winston from "winston";
import TransportStream = require("winston-transport");
export default class BrowserConsole extends TransportStream {
    private methods;
    constructor(opts?: TransportStream.TransportStreamOptions);
    log(logEntry: winston.LogEntry, next: () => void): void;
}
