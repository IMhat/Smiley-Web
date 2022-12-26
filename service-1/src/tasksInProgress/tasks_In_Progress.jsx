import React, { useState, useEffect, Suspense } from "react";
import {jwt, username} from "navKey/UserService";

import { getTasksInProgress } from "../modules/task";
import '../styles/tasks_general.css';
export default function TasksInProgressContent(){

    const [tasksInProgress, setTasks] = useState([]);
    const fetchTasks = async() =>{
        const {data} = await getTasksInProgress();
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
             <div className="mt-20">InProgress</div>
   

             {/* {JSON.stringify(tasksApproved)}
             <div className="mt-96">Service-1 content </div> */}


<div className="container1">
  {tasksInProgress.map((t)=>(
    <div className="tasks">
<h1 className="title">{t.title}</h1>
<div className="container2"><h1 className="priority">{t.priority}</h1>
<h1 className="statusInProgress">{t.status}</h1></div>

<h3>{t.assignmentUser}</h3>
<div>
  {t.startDate}

</div>

<div> {t.endDate}</div>
    </div>
  ))}
</div>




        </div>





    );
}