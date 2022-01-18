API Created by Pranjal Upadhyay
UTD Student ID: 2021607537  
EmailID: pxu210002@utdallas.edu  

# Language Used: Javascript-NodeJS

# Steps to Run the Application:
1. Install node JS on your system. If aleady installed, check the version of it by executing node -v command on the command line  
2. Clone the application on your local system  
3. cd Into the directory of the cloned project  
3. Execute the following commands on the command line:  

    npm install  
    
    npm start

4. After above two lines are executed, the sentiment analysis application would be running on the localhost and port 3000. Navigate to "localhost:3001" in a new chrome tab.



## Directory description
The node application's routes can be viewed on app.js. Mainly two endpoints are in use, "/" and "/updateTasks"

The data is being maitained in tasks.json file (equivalent to database)
On the frontend, upon clicking "update backend" button, the tasks.json is updated with the newly modified tasks list, visible or edited on the frontend.

The project directory is summarized as follows:  
1. app.js: Contains code for express application for input/output (I/O)  
2. tasks.json Contains the list of tasks to be shown on the front end. Is equivalent to database. Any updates on the frontend are reflected on this file.

