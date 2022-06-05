const mathutils = require('utilmonkey/modules/math');
const timer = require('utilmonkey/modules/time')
const crypton = require('utilmonkey/modules/crypto');
const filemangr = require('utilmonkey/modules/files')
const log = require('C:/Users/AM/cli-project/modules/info.js')
console.log('Waiting 1 seconds...')
timer.sleep(1000)
console.log('1 seconds are over! Beep Beep!')
console.log('Now lets do some math!')
const answer = mathutils.mult(5, 4)
console.log('The answer is ' + answer + '!')
const key = new crypton('myTotallySecretKey');
const encryptedString = key.encrypt('Hi');
const decryptedString = key.decrypt(encryptedString);
console.log('Our encrypted key is ' + encryptedString +'! Thats huge!')
console.log('Meanwhile we encrypted 2 letters. H and I: ' + decryptedString);
filemangr.write("./txt.txt", "Hello world!")
console.log('We just wrote something to ./txt.txt! Now we are attempting to read it and then log it to console')
filemangr.read("./txt.txt", function(response){console.log(response)})
const logger = new log('Your app name here');
logger.info('Info message here');
logger.error('Error! something went wrong')
logger.warning('Warning right here')
logger.success('Good job / success message here!')
console.log('Tested all modules. Errors will be above')