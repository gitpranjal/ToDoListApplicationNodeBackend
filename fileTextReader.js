const fs = require('fs');


const readTextFromFile = async (textFilePath) => {

    return new Promise((resolve, reject) => {
        fs.readFile(textFilePath, 'utf8', function(err, data) {
            if (err) reject(err);
            resolve(data)
        })
    })
    

}

module.exports = {readTextFromFile}
