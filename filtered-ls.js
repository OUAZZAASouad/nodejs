const fs  = require('fs')
fs.readdir(process.argv[2], function (err, data) {
       if (err) return console.error(err);
       for (i=0; i<data.length; i++){
            if ( data[i].includes('.') && data[i].split('.').pop() == process.argv[3])
            console.log(data[i].toString())
       }
    });