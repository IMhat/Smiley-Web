import React, { useState, useEffect, Suspense } from "react";
import { jwt, username } from "navKey/UserService";

import { getTasksApproved } from "../modules/task";
import "../styles/tasks_general.css";
import "./styles/tasks_Approved.css";
export default function TasksApprovedContent() {
  const [tasksApproved, setTasks] = useState([]);
  const fetchTasks = async () => {
    const { data } = await getTasksApproved();
    setTasks(data);
  };

  useEffect(() => {
    try {
      fetchTasks();
    } catch (error) {}
  }, []);

  return (
    <div className="containerPadre">
      <div className="mt-20">Approved</div>

      {/* {JSON.stringify(tasksApproved)}
             <div className="mt-96">Service-1 content </div> */}

      <div className="container1">
        {tasksApproved.map((tasksApproved) => (
          <div className="tasks">
            <h1 className="title">{tasksApproved.title}</h1>
            <div className="container2">
              <h1 className="priority">{tasksApproved.priority}</h1>
              <h1 className="statusApproved">{tasksApproved.status}</h1>
            </div>

            <h3>{tasksApproved.assignmentUser}</h3>
            <div>{tasksApproved.startDate}</div>

            <div> {tasksApproved.endDate}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
