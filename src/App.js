import React, { useState } from "react";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  const addTask = () => {
    if (!input.trim()) return;
    setTasks([...tasks, { text: input, completed: false }]);
    setInput("");
  };

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <div className="card">
        <h1 className="title">✨ TODO App</h1>

        <div className="inputContainer">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Add a new task..."
            className="input"
          />
          <button onClick={addTask} className="addButton">
            Add
          </button>
        </div>

        <ul className="list">
          {tasks.map((task, index) => (
            <li key={index} className="listItem">
              <span
                onClick={() => toggleTask(index)}
                className={`taskText ${task.completed ? "completed" : ""}`}
              >
                {task.text}
              </span>

              <button
                onClick={() => deleteTask(index)}
                className="deleteButton"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>

        {tasks.length === 0 && (
          <p className="empty">No tasks yet. Add one 👆</p>
        )}
      </div>
    </div>
  );
}

export default App;