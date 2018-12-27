import * as winston from "winston";
import BrowserConsole from './lib/BrowserConsole';

const level = "debug";
winston.configure({
    transports: [
        new BrowserConsole(
            {
                format: winston.format.simple(),
                level,
            },
        ),
        // Uncomment to compare with default Console transport
        // new winston.transports.Console({
        //     format: winston.format.simple(),
        //     level,
        // }),
    ],
});

winston.debug("DEBUG ", {a: 1, b: "two"});
winston.debug("DEBUG ", {a: 1, b: "two"});
winston.info("INFO ", {a: 1, b: "two"});
winston.info("INFO ", {a: 1, b: "two"});
winston.warn("WARN", {a: 1, b: "two"});
winston.warn("WARN", {a: 1, b: "two"});
winston.error("ERROR ", {a: 1, b: "two"});
winston.error("ERROR ", {a: 1, b: "two"});

winston.debug("A message alone :'(\n hahaha");
winston.debug("Here examinable Object ", {test: 'test', sub: { object : { test : "here" } } });
winston.debug("Here examinable Object ", {test: 'test'});
winston.debug("Here examinable Object ", {test: 'test'});
winston.debug("Here examinable Object ", {test: 'test'});
winston.debug("Here examinable Object ", {test: 'test'});
winston.debug("Here examinable Object ", {test: 'test'});
winston.debug("STRING ", "A string here");