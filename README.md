# Winston Transport BrowserConsole

Want to log in browser like using console.log but using winston?

Want to filter by level in your browser?

Want to inspect the objects arguments instead of printing them as json strings?

```
npm install winston-browser-console -D
```

And here you have a little sample:
```
import * as winston from "winston";
import BrowserConsole from 'winston-browser-console';

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
winston.info("INFO ", {a: 1, b: "two"});
winston.warn("WARN", {a: 1, b: "two"});
winston.error("ERROR ", {a: 1, b: "two"});
```


***Notice*** Tested with version 3.x.x of winston.
Please be sure to set the *level* in the ConsoleBrowser constructor as did not find a good way to get the one configured in winston.