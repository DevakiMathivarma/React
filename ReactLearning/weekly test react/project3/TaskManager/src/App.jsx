import React from "react";
import TaskList from "./components/TaskList";
import "./App.css";

function App() {
  return (
    <div className="app">
      <h1>✅ Simple Task Manager</h1>
      <TaskList />
    </div>
  );
}

export default App;
