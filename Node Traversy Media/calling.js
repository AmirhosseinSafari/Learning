const Logger = require('./logger')

const logger = new Logger
logger.on('message', (data) => { console.log("Called event: ", data); })

logger.log("Hi there!")
logger.log("Hi there!")
logger.log("Hi there!")
