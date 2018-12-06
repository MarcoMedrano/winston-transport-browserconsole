
import * as winston from "winston";
import * as Transport from 'winston-transport';

export default class BrowserConsole extends Transport {

    private methods = {
        debug: 'debug',
        error: 'error',
        info: 'info',
        warn: 'warn',
    };

    constructor(opts?: Transport.TransportStreamOptions) {
        super(opts);

        // this.level = Level[Level.debug];

        if (opts && opts.level && Level.hasOwnProperty(opts.level)) {
            this.level = opts.level;
        }
        else {
            // TODO this is not getting the level configured in winston.configure
            this.level = winston.level;
        }
    }

    public log(logEntry: winston.LogEntry, callback: any) {
        (window as any).l = logEntry;
        setImmediate(() => {
            (this as any).emit('logged', logEntry);
        });

        const incommingLevel: Level = Level[logEntry.level];

        if (incommingLevel <= Level[this.level!]) {
            const { message, level } = logEntry;
            const mappedMethod = this.methods[level];

            if (Object.getOwnPropertySymbols(logEntry).length === 2)
                console[mappedMethod](message);
            else {
                // @ts-ignore
                let args = logEntry[Object.getOwnPropertySymbols(logEntry)[1]];
                args = args.length >= 1 ? args[0] : args;
                console[mappedMethod](message, args);
            }
        }

        callback();
    }
}

enum Level {
    error = 0,
    warn = 1,
    info = 2,
    debug = 4,
}