const {analSentiment} = require("./sentimentCalculator")

analSentiment("cats are stupid")
.then((obj) => {
    console.log(obj)
})
.catch(e => {
    console.log(e)
})