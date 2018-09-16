import * as winston from "winston"
import { ENVIRONMENT } from "./secrets"

import {config} from '../config'

const options = {
    file: {
      level: 'info',
      filename: `${appRoot}/logs/app.log`,
      handleExceptions: true,
      json: true,
      maxsize: 5242880, // 5MB
      maxFiles: 5,
      colorize: false,
    },
    console: {
      level: 'debug',
      handleExceptions: true,
      json: false,
      colorize: true,
    },
  }

export const logger = winston.createLogger({
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.simple()
            )
        })
    ],
    level: config.logger.level
})

// export const logger = new (winston)({
//     transports: [
//         new (winston.transports.Console)({ level: process.env.NODE_ENV === "production" ? "error" : "debug" }),
//         new (winston.transports.File)({ filename: "debug.log", level: "debug"})
//     ]
// });

// if (process.env.NODE_ENV !== "production") {
//     logger.debug("Logging initialized at debug level");
// }