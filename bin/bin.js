#!/usr/bin/env node
require('yargs')
.showHelpOnFail(false, "Specify --help for available options")
  .scriptName("utilmonkey")
  .usage('$0 <cmd> [args]')
  .command('server', 'Create a new app', (yargs) => {
    yargs.positional('app-name', {
      type: 'string',
      default: 'my-first-app',
      describe: 'create a new app!'
    }).positional('', {
        describe: 'readme false or true'
      });
  }, function (argv) {
    
    }
        
  )
  .help()
  .argv