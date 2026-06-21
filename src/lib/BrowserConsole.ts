import * as winston from "winston";
import { LEVEL, MESSAGE } from "triple-beam";
import TransportStream = require("winston-transport");

export default class BrowserConsole extends TransportStream {
  private methods = {
    debug: "debug",
    error: "error",
    info: "info",
    warn: "warn"
  };

  constructor(opts?: TransportStream.TransportStreamOptions) {
    super(opts);

    if (opts && opts.level && Level.hasOwnProperty(opts.level)) {
      this.level = opts.level;
    }
  }

  public log(logEntry: winston.LogEntry, next: () => void) {
    // (window as any).l = logEntry;
    setImmediate(() => {
      (this as any).emit("logged", logEntry);
    });

    // @ts-ignore
    const { [MESSAGE]: message, [LEVEL]: level } = logEntry;
    const mappedMethod = this.methods[level];

    console[mappedMethod](message);

    next();
  }
}

enum Level {
  error = 0,
  warn = 1,
  info = 2,
  debug = 4
}
