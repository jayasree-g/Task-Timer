# TASK TIMER
Task Timer is a simple and intuitive task management application that helps you manage your time more efficiently. With a user-friendly interface, you can easily create tasks and track your time.

## FUNCTIONALITY
- Create a task: Enter the task name in the text box and click the "Start" button. <BR>
- Start timer: The timer will begin counting once the "Start" button is clicked. Wait for the timer to start.<BR>
- Stop timer: Click the "Stop" button to stop the timer and add the elapsed time and task name to the task list.<BR>
- Resume task: Click the "Play" button to resume a previously started task, bringing it to the top of the list with the stop button activated and timer running.<BR>

## Setting up the Database
1. [Install MySQL](https://dev.mysql.com/downloads/installer/) on your local machine if you haven't already done so.
2. Open MySQL Workbench or your preferred MySQL client and create a new schema for the project.
````
CREATE DATABASE database_name;

USE database_name;

CREATE TABLE tasks (
  id INT AUTO_INCREMENT PRIMARY KEY,
  task VARCHAR(255) NOT NULL,
  hours VARCHAR(2) NOT NULL,
  minutes VARCHAR(2) NOT NULL,
  seconds VARCHAR(2) NOT NULL
);
````
3. Update the config.js file with the appropriate database connection details.
````
module.exports = {
  db: {
    host: 'localhost',
    user: 'your_mysql_username(usually it is 'root')',
    password: 'your_mysql_password',
    database: 'your_database_name',
  },
};
````
## RUNNING THE APPLICATION
1. Clone the repository to your local machine
````
git clone https://github.com/jayasree-g/Task-Timer.git
````
2. Install all the required dependencies by running the following code in a new terminal
````
npm install
````
3. Start the application by running
````
npm start
````
4. In a new terminal, run the following code
````
cd server
node index.js
````