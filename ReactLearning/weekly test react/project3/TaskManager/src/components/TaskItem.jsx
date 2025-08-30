import React from "react";

const TaskItem = ({ taskName, isCompleted, onMarkDone }) => {
  return (
    <div className="task-item">
      <span className={isCompleted ? "done" : ""}>
        {taskName} {isCompleted ? "✔️" : "❌"}
      </span>

      {!isCompleted && (
        <button className="btn-done" onClick={onMarkDone}>
          Mark as Done
        </button>
      )}
    </div>
  );
};

export default TaskItem;
