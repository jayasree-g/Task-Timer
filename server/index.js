const express = require("express");
const app = express();
const mysql = require("mysql");
const cors=require("cors")
const bodyParser = require("body-parser");

const config = require('../config');
const db = mysql.createPool(config.db);

app.use(cors());
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});

app.get("/", (req, res) => {
    res.send("Welcome to the task manager app!");
  });
  
app.get("/api/get", (req, res) => {
  const sqlSelect = "SELECT * FROM tasks";
  db.query(sqlSelect, (err, result) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(result);
    }
  });
});

app.post("/api/insert", (req, res) => {
  const task=req.body.task
  const hours=req.body.hours
  const minutes=req.body.minutes
  const seconds=req.body.seconds
  const sqlInsert = "INSERT INTO tasks(task, hours, minutes, seconds) VALUES (?,?,?,?)";
  db.query(sqlInsert,[task,hours,minutes,seconds], (err, result)=>{
    console.log(result);
  });
});

app.get('/api/task/:id', (req, res)=>{
  const taskId = req.params.id;
  const query = 'SELECT task FROM tasks WHERE id = ?';
  db.query(query, [taskId], (err, result)=>{
      res.send(result[0].task);
  });
});
app.get('/api/hours/:id', (req, res)=>{
  const taskId=req.params.id;
  const query='SELECT hours FROM tasks WHERE id = ?';
  db.query(query, [taskId], (err, result) => {
    res.send(result[0].hours);
  });
});
app.get('/api/minutes/:id', (req, res)=>{
  const taskId=req.params.id;
  const query='SELECT minutes FROM tasks WHERE id = ?';
  db.query(query, [taskId], (err, result)=>{
      res.send(result[0].minutes);
  });
});
app.get('/api/seconds/:id', (req, res)=>{
  const taskId=req.params.id;
  const query='SELECT seconds FROM tasks WHERE id = ?';
  db.query(query, [taskId], (err, result)=>{
      res.send(result[0].seconds);
  });
});
app.delete('/api/delete/:id', (req, res)=>{
  const taskId=req.params.id;
  const query='DELETE FROM TASKS WHERE id = ?';
  db.query(query, [taskId], (err, result)=>{
    res.send('Task deleted successfully');
  });
});
