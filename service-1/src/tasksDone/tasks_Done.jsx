import React, { useState, useEffect, Suspense } from "react";
import { jwt, username } from "navKey/UserService";

import { getTasksDone } from "../modules/task";
import "../styles/tasks_general.css";
import "./styles/tasks_Done.css";
export default function TasksDoneContent() {
  const [tasksDone, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksDone();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  return (
    <div className="containerPadre">
      <div className="mt-20">Done</div>

      {/* {JSON.stringify(tasksApproved)}
             <div className="mt-96">Service-1 content </div> */}

      <div className="container1">
        {tasksDone.map((tasksDone) => (
          <div className="tasks">
            <h1 className="title">{tasksDone.title}</h1>
            <div className="container2">
              <h1 className="priority">{tasksDone.priority}</h1>
              <h1 className="statusDone">{tasksDone.status}</h1>
            </div>

            <h3>{tasksDone.assignmentUser}</h3>
            <div>{tasksDone.startDate}</div>

            <div> {tasksDone.endDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
