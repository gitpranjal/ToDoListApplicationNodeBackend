const Sentiment = require('sentiment');


const analSentiment = async (targetText) => {

    return new Promise((resolve, reject) => {
        const sentimentAnalyzerObject = new Sentiment();
        try{
            let result = sentimentAnalyzerObject.analyze(targetText)
            resolve(result)
        }
        catch(e){
            console.log("###### Error in geting the sentiment analysis object###")
            reject(e)
        }
    })

}

module.exports = {analSentiment}