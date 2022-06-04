#!/usr/bin/env node
require('yargs')
  .scriptName("util-monkey")
  .usage('$0 <cmd> [args]')
  .command('hello [name]', 'Get a free hello!', (yargs) => {
    yargs.positional('name', {
      type: 'string',
      default: 'User',
      describe: 'get a free hello!'
    })
  }, function (argv) {
    console.log('hello ', argv.name, ' how are you?')
    sleep(5000)
    console.error('Set!')
  })
  .help()
  .argv