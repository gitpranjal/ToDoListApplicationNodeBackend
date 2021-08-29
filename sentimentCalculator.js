
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

const analSentimentSentenceBySentence = async (targetText) => {

    return new Promise((resolve, reject) => {
        try{
            const sentimentAnalyzerObject = new Sentiment();
            let sentences = targetText.split(".")
            let sentencesSentimentObjectsList= []
            for(let sentence of sentences)
            {
                let sentenceSentimentObject = sentimentAnalyzerObject.analyze(sentence)
                let newObj = {}
                newObj[sentence] = sentenceSentimentObject["comparative"]
                sentencesSentimentObjectsList.push(newObj) 
            }
            resolve(sentencesSentimentObjectsList)
        }
        catch(e){
            reject(e)
        }
    })

}

module.exports = {analSentiment, analSentimentSentenceBySentence}