

import React, { useState, useEffect, Suspense } from "react";
import {jwt, username} from "navKey/UserService";

import { getTasksBacklog } from "../modules/task";
import './styles/tasks_Backlog.css';
export default function TasksBacklogContent(){

    const [TasksBacklog, setTasks] = useState([]);
    const fetchTasks = async() =>{
        const {data} = await getTasksBacklog();
        setTasks(data);
    }

    useEffect(() => {
      try {
        fetchTasks();
      } catch (error) {
        
      }
    }, []);

    return(
        <div className="containerPadre">
             <div className="mt-20">Backlog</div>
   

             {/* {JSON.stringify(TasksBacklog)}
             <div className="mt-96">Service-1 content </div> */}


<div className="container1">
  {TasksBacklog.map((TasksBacklog)=>(
    <div className="tasks">
<h1 className="title">{TasksBacklog.title}</h1>
<div className="container2"><h1 className="priority">{TasksBacklog.priority}</h1>
<h1 className="statusBacklog">{TasksBacklog.status}</h1></div>

<h3>{TasksBacklog.assignmentUser}</h3>
<div>
  {TasksBacklog.startDate}

</div>

<div> {TasksBacklog.endDate}</div>
    </div>
  ))}


  <div>
  
    <button  className="buttonAddTasks"><i class="bi bi-plus-square-fill"></i>Add New Tasks</button>
  </div>
  
  
  
</div>




        </div> 
        // <TaskDoneContent/>





    );
}