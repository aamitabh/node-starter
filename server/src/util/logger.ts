import * as winston from "winston"
import { ENVIRONMENT } from "./secrets"

import {config} from '../config'

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