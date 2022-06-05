function logger(scriptName) {
const chalk = require('chalk') 
    this.warning = function warning(txt) {
        console.log("\n" + scriptName + " " + chalk.bgYellow.black(" WARNING ") + " " + txt + "\n")
    };
    this.error = function error(txt) {
        console.log("\n" + scriptName + " " + chalk.bgRed.black(" ERROR ") + " " + txt + "\n")
    };
    this.info = function info(txt) {
        console.log("\n" + scriptName + " " + chalk.bgWhite.black(" INFO ") + " " + txt + "\n")
    };
    this.success = function success(txt) {
        console.log("\n" + scriptName + " " + chalk.bgGreen.black(" SUCCESS ") + " " + txt + "\n")
    };
    this.terminal = function terminal(){
        
    }
    
}

module.exports = logger;