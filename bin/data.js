#!/usr/bin/env node
require('yargs')
  .scriptName("utilmonkey")
  .usage('$0 <cmd> [args]')
  .command('server [file] [port]', 'Start an http server for your html file.', (yargs) => {
    yargs.positional('file', {
      type: 'string',
      default: 'index.html',
      describe: 'The file to deploy on the http server.'
    }).positional('file', {
      type: 'string',
      default: '5050',
      describe: 'The port to deploy on the http server'
    })
  }, function (argv) {









const express = require('express')
const app = express()
var port = argv.port
var  fpath = argv.file
if (argv.port == undefined) {var port = 5050}
if (argv.fpath == undefined) {var fpath = "index.html"}

app.get('/', (req, res) => {
  res.sendFile( + "" + fpath)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})







  })
  .help()
  .argv