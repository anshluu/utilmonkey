#!/usr/bin/env node
const yargs = require('yargs/yargs')
const { hideBin } = require('yargs/helpers')
const argv = yargs(hideBin(process.argv))
.command("", "")
.demand(1, "must provide a valid command")
.help("help")
.argv

function mult(num, num2){
    num * num2;    
}

const result = mult(argv.number, argv.number2)
console.log(result)