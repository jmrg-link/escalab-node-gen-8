const appRoot = require("app-root-path");
const winston = require("winston");
const { config } = require("../config")

const logger = winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    winston.format.printf(({ level, message, timestamp }) => {
      return `[ ${level} | ${timestamp} | ${message.trim()} ]`;
    })
  ),

  transports: [
    new winston.transports.File({
      filename: `${appRoot}/logs/error.log`,
      level: "error",
      colorize: true,
    }),
    new winston.transports.File({
      filename: `${appRoot}/logs/warn.log`,
      level: "warn",
      colorize: true,
    }),
    new winston.transports.File({
      filename: `${appRoot}/logs/data.log`,
      level: "data",
      colorize: true,
    }),
    new winston.transports.File({
      filename: `${appRoot}/logs/info.log`,
      level: "info",
      colorize: true,
    }),
  ],

  exitOnError: false,
  handleExceptions: true,
  maxsize: 10485760, // 10 MB
  maxFiles: 5,
})

if (config.server.dev !== config.server.prod) {
  logger.add(
    new winston.transports.Console({
      format: winston.format.combine(winston.format.colorize()),
    })
  );
}

logger.stream = {
  write: function (message, encoding) {
    logger.info(message);
  },
};

module.exports = logger;
