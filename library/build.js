const express = require('express')
const app = express()
const port = 2022

app.get('/', (req, res) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
  res.send('HTTP Test Built. Working correctly! Todays date: ' + today)
})

app.listen(port, (err) => {
    if (err) {console.log(err)}
})