import * as winston from "winston";
import { utilities } from "nest-winston";

export const loggerOptions = {
    level: "info",
    transports: [
      new winston.transports.Console({
        level: "info",
        format: winston.format.combine(
          winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss" }),
          winston.format.ms(),
          utilities.format.nestLike("mmo-rpg", {
            colors: true,
            prettyPrint: true
          })
        )
      }),

      new winston.transports.File({
        level: "debug",
        filename: "logs/events.log",
        format: winston.format.combine(
          winston.format.timestamp({ format: "YYYY/MM/DD HH:mm:ss" }),
          winston.format.ms(),
          utilities.format.nestLike("mmo-rpg", {
            colors: false,
            prettyPrint: true
          })
        )
      })
    ]
  }