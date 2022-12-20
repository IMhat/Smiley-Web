import React, { useState, useEffect, Suspense } from "react";
import {jwt, username} from "navKey/UserService";

import { getTask } from "./modules/task";

export default function Service1Content(){

    const [tasks, setTasks] = useState([]);
    const fetchTasks = async() =>{
        const {data} = await getTask();
        setTasks(data);
    }

    useEffect(() => {
      try {
        fetchTasks();
      } catch (error) {
        
      }
    }, []);

    return(
        <div>
             <div className="mt-20">Service-1 content </div>
   

             {JSON.stringify(tasks)}
             <div className="mt-96">Service-1 content </div>
        </div>
    );
}