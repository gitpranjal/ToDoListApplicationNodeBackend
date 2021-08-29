# ACM Research Coding Challenge (Fall 2021) - Submission by Pranjal Upadhyay
Student ID: 2021607537
EmailID: pxu210002@utdallas.edu

# Language Used: Javascript-NodeJS
# Steps to Run the Application:
1. Install node JS on your system. If aleady installed, check the version of it by executing node -v command on the command line
2. Clone the application on your local system
3. cd Into the directory of the cloned project
3. Execute the following commands on the command line:

    npm install
    npm run

4. After above two lines are executed, the sentiment analysis application would be running on the localhost and port 3000. Navigate to "localhost:3000" in a new chrome tab.

5. This will open the chrome tab with application running. Now, upload the text file which contains the text file for which sentiment score has to be calculated by clicking on the choose file button. As an example, input.txt has been provided in this project's directory.

6. After upload is done, click on analyse button, which will navigate to a new endpoint containing the detailed sentiment analysis of the text from the text file

## APIS USED
# AFINN based sentiment analysis API for sentiment analysis
For this appliction, AFINN-based sentiment analysis API has been used which is built in Node JS. AFINN is a set of words/token, whose sentiment score has been assigned from -5 to +5. Any arbitrary text is first tokenized, and then sentiment score of each of the word is determined. Finally, an object is returned which contains a detailed analysis of the sentiment scores of each of the world and overall score of the inputted text. This Object has the following parameters:
    (a) score : This is the overall summation of all the sentiment scores of all the words
    (b) comparitive: This is the overall sentiment score of the inputted text and is equal to the ratio of summation of all the individual scores of words and the total number of words. 
    (c) calculation: This is a list which contains objects having words mapped against their individual score
    (d) positive: This is a list of al the tokens/words having positive scores as per AFINN list
    (e) nehative: This is a list of all the tokens/words having negatve sentiment scores as per AFINN list

Refer to this link for more info about the API:
https://www.npmjs.com/package/sentiment

# Multer API For file upload
For the purpose of file upload, that is, the text file containing the text which contains the target text, which is to be analysed in detail for sentiment scores, Node JS's multer library is used, which is a file upload library
Refer to this link for more info:
https://www.npmjs.com/package/multer


## Methodology

In order to create a useful utility out of this application, a simple node JS application has been created. The input-output operations occur through the file app.js and the apis have been created. The home page "/" renders an html form: fileUploadInterface.html which is in the views directory. On that form, file upload botton "Choose file" is there which allows to choose the text file. Once selected, on the backend, multer api handles the file upload and a post request is sent to another end point - "/analyseSentiment". The post request has file attribute which futher has a path attribute which specified the path in which the file has been uploaded - request.file.path. From this path, the text is read and extracted to a string variable using Node's fs library which is the standard file handling library. Once the string is with us, it's simply fed to the sentiment analysis api which provides us detailed sentiment analysis object of the text string. 

The project directory is summarized as follows:
1. app.js: Contains code for express application for input/output (I/O)
2. sentimentCalculator.js: Contains two functions for sentiment analysis of the text, namely, 
    analSentiment and analSentimentSentenceBySentence. analSentiment returns the sentiment analysis object for entire text, while analSentimentSentenceBySentence returns sentiment objects for each sentence (assumed to be seperated by .). These two functions are imported inside the app.js
3. fileTextReader.js: Contains the function readTextFromFile to read any text file and return a string. 
