const log = require('modules/info')

const logger = new log('Your app name here');
logger.info('Info message here');
logger.error('Error! something went wrong')
logger.warning('Warning right here')
logger.success('Good job / success message here!')