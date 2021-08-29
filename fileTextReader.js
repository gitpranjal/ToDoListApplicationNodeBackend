const fs = require('fs');


const readTextFromFile = async (textFilePath) => {
   // Function to read text from a file and return it as string
    return new Promise((resolve, reject) => {
        fs.readFile(textFilePath, 'utf8', function(err, data) {
            if (err) reject(err);
            resolve(data)
        })
    })
    

}

module.exports = {readTextFromFile}
