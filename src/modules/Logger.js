// log level definitions
const LOG_LEVEL = {
    DEBUG: { level: 1, levelValue: "debug" },
    INFO: { level: 2, levelValue: "info" },
    WARN: { level: 3, levelValue: "warn" },
    ERROR: { level: 4, levelValue: "error" }
};

class Logger {
    info (message, meta) {
        this.log(message, LOG_LEVEL.INFO, meta);
    }
    error (message, meta) {
        this.log(message, LOG_LEVEL.ERROR, meta);
    }
    debug (message, meta) {
        this.log(message, LOG_LEVEL.DEBUG, meta);
    }
    warn (message, meta) {
        this.log(message, LOG_LEVEL.WARN, meta);
    }
    log (message, logLevel, meta) {
    // tslint:disable-next-line
    // There is no server-side logging.
    // Only client side logging is applicable.
        console.log(message, meta);
    }
}

const logger = new Logger();

export default logger;
