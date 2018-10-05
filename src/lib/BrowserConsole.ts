
import * as winston from "winston";
import * as Transport from 'winston-transport';

export default class BrowserConsole extends Transport {

    private methods = {
        debug: 'log',
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
        setImmediate(() => {
            (this as any).emit('logged', logEntry);
        });

        const incommingLevel: Level = Level[logEntry.level];

        if (incommingLevel <= Level[this.level!]) {
            const { message, level, ...rest } = logEntry;
            const mappedMethod = this.methods[level];

            // yeah JSON trick to get rid of Symbol properties.
            const obj = JSON.parse(JSON.stringify(rest));
            if (Object.keys(obj).length === 0)
                console[mappedMethod](message);
            else
                console[mappedMethod](message, obj);

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