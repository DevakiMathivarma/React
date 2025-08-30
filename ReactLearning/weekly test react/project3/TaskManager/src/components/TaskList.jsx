import React, { useState } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  // State for tasks
  const [tasks, setTasks] = useState([
    { id: 1, taskName: "Learn React Basics", isCompleted: false },
    { id: 2, taskName: "Build Task Manager Project", isCompleted: false },
    { id: 3, taskName: "Prepare Interview Questions", isCompleted: true },
  ]);

  // Callback function to mark task as done
  const markAsDone = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          taskName={task.taskName}
          isCompleted={task.isCompleted}
          onMarkDone={() => markAsDone(task.id)} // callback prop
        />
      ))}
    </div>
  );
};

export default TaskList;
