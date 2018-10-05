import * as winston from "winston";
import * as Transport from 'winston-transport';
export default class BrowserConsole extends Transport {
    private methods;
    constructor(opts?: Transport.TransportStreamOptions);
    log(logEntry: winston.LogEntry, callback: any): void;
}
