const { format, createLogger, transports } = require('winston')
const { timestamp, combine, printf, colorize } = format
const config = require('config')
const logs = config.get('logs')
const logCons = require('../constants/log-constants')

const logFormat = printf(({ level, timestamp, message }) => {
  return `${timestamp} ${level}: ${message}`
})

const logger = createLogger({
  level: logs.level,
  format: combine(
    colorize(),
    timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
    logFormat
  ),
  transports: [new transports.Console()]
})

const printLog = (level, message, type) => {
  if (typeof type !== 'undefined') {
    switch (type) {
      case 0:
        message = logCons.LOG_ENTER + message
        break
      case 1:
        message = logCons.LOG_EXIT + message
        break
    }
  }
  switch (level) {
    case 'debug':
      logger.debug(message)
      break
    case 'info':
      logger.info(message)
      break
    case 'warn':
      logger.warn(message)
      break
    case 'error':
      logger.warn(message)
      break
  }
}

module.exports = {
  printLog
}