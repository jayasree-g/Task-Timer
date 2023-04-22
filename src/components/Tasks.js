import { useState, useEffect } from 'react';
import './Tasks.css'
//import IndividualTasks from './IndividualTasks'
import {BsPlay} from 'react-icons/bs'
import { IoEllipsisVerticalOutline } from 'react-icons/io5';
import Axios from 'axios';

function Tasks(){
    let [sec,setsec]=useState("00")
    let [min,setmin]=useState("00")
    let [hr,sethr]=useState("00")
    let [s,sets]=useState(0)
    let [m,setm]=useState(0)
    let [h,seth]=useState(0)
    let [sbutton,setbutton]=useState("START")
    let [taskList, setTaskList] = useState([]);
    let [input,setInput]=useState("")
    let newi=""
    let newh=""
    let newm=""
    let news=""
    useEffect(() => {
        fetch('http://localhost:3001/api/get')
          .then(response => response.json())
          .then(data => setTaskList(data));
      }, []);
      let TaskResume=(taskId)=>{
        Promise.all([
          Axios.get(`http://localhost:3001/api/task/${taskId}`),
          Axios.get(`http://localhost:3001/api/hours/${taskId}`),
          Axios.get(`http://localhost:3001/api/minutes/${taskId}`),
          Axios.get(`http://localhost:3001/api/seconds/${taskId}`)
        ]).then((responses) => {
          setInput(responses[0].data);
          sethr(responses[1].data);
          seth(parseInt(responses[1].data));
          setmin(responses[2].data);
          setm(parseInt(responses[2].data));
          setsec(responses[3].data);
          sets(parseInt(responses[3].data));
          console.log(responses);
        })
        Axios.delete(`http://localhost:3001/api/delete/${taskId}`)
        .then(()=>{
            console.log("deleted");
        })
        setbutton("STOP")
    };
      
    let HandleClick=()=>{
        if(sbutton=="START")
        {
            if(input=="") {
                alert("Please enter a task!");
                setbutton("START");
                return;
            }
            setbutton("STOP")
        }
        else
        {
            Axios.post('http://localhost:3001/api/insert',{task: input,
            hours:hr,
            minutes:min,
            seconds:sec})
            /*console.log(hr,min,sec)
            const id = taskList.length + 1;
            setTaskList((prev) => [
                ...prev,
                {
                    id: id,
                    task: input,
                    hours:hr,
                    minutes:min,
                    seconds:sec
                },
            ]);*/
            setInput("");
            setbutton("START");
            sethr("00");
            setmin("00");
            setsec("00");
            window.location.reload();
        }
    }
    useEffect(()=>{
        let interval
        if (sbutton=="STOP") {
            interval=setInterval(()=>{
                if(s+1==60)
                {
                    setm(m+1)
                    sets(0)
                }
                else{
                    sets(s+1)
                }
                if(m+1==60)
                {
                    seth(h+1)
                    sets(0)
                }
                setsec(s.toString().padStart(2,'0'))
                setmin(m.toString().padStart(2,'0'))
                sethr(h.toString().padStart(2,'0'))
            }, 1000)
        }
        return()=>clearInterval(interval)
    }, [sbutton=="STOP", s, m, h])
    return (
        <div id='page'>
        <div id="outer">
        <form action="">
        <input type="text" id="inner" name="tname" placeholder='What are you working on?' value={input} onChange={(e)=>setInput(e.target.value)}></input>
        </form>
            <div id='line'></div>
            <div id='timer'><b>{hr} : {min} : {sec}</b></div>
            <button id="start" onClick={HandleClick}>{sbutton}</button>
        </div>
        <div id='lower'>This week
        <div id='today'><h6>Today</h6></div>
        <div className="task-list">
          {taskList.map((todo) => {
            return (
              <div key={todo.id} id="task-box">
                {todo.task}
                <div id='timer-tasks'><b>{todo.hours} : {todo.minutes} : {todo.seconds}</b><button id='play' on onClick={()=>TaskResume((todo.id))}><BsPlay/></button><button id='det'><IoEllipsisVerticalOutline/></button></div>
              </div>
            );
          })}
        </div>
        </div>
        </div>
    )
}

export default Tasks;