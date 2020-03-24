# 1.0.X
## 1.0.2
    Using commonjs as module, that way types are working in both browser and node.
## 1.0.3
    Updated all dependencies to latest, especially to address third party vulnerabilities.
## 1.0.4
    Not defined object arguments in node console were printing 'undefined' now they are not printing, as in browser console.

## 1.0.5
    Now it is not mandatory to specify the level in the constructor, winston is executing the log method according your specified level in winston.configure.