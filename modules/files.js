
const write = (where, what) => {
    const fs = require('fs');
    
    fs.writeFile(where, (what), (err) => {
        if (err)
          console.log(err); 
})}

const read = (where, callback) => {
    fs = require('fs')
    fs.readFile(where, 'utf8', function(err, data){
    if (err) 
        console.log(err)
    else {
        callback(data)
    }
    })
}
    
    
exports.read = read;
exports.write = write;