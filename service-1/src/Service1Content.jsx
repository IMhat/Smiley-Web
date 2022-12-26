import React, { useState, useEffect, Suspense } from "react";
import { jwt, username } from "navKey/UserService";
import TasksBacklogContent from "./tasksBacklog/task_backlog";
import TasksToDoContent from "./tasksToDo/tasks_ToDo";
import TasksInProgressContent from "./tasksInProgress/tasks_In_Progress";
import TasksDoneContent from "./tasksDone/tasks_Done";
import TaskApprovedContent from "./tasksApproved/Task_Approved";

import "./styles/service1.css";

export default function Service1Content() {
  return (
    <div className="mainColumns">
      <div>
        <TasksBacklogContent />
      </div>

      <div>
        <TasksToDoContent />
      </div>

      <div>
        <TasksInProgressContent />
      </div>

      <div>
        <TasksDoneContent />
      </div>

      <div>
        <TaskApprovedContent />
      </div>
    </div>
  );
}
