// import Image from "next/image";
// import styles from "../styles/page.module.css";

// export default function Home() {
//   return (
//     <main className={styles.main}>
//       <h1> Hello this is an nextjs project </h1>
//     </main>
//   );
// }

"use client";

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Link from "next/link";
import { addTask, deleteTask, editTask } from "./store/actions";
import Task from "./components/Task";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    storedTasks.forEach((task) => dispatch(addTask(task)));
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // src/app/page.js

  const handleAddTask = () => {
    const title = prompt("Enter task title:");
    const description = prompt("Enter task description:");
    if (title && description) {
      const existingTask = tasks.find(
        (task) => task.title === title && task.description === description
      );
      if (!existingTask) {
        const task = { id: Date.now(), title, description };
        dispatch(addTask(task)); // Only add the task if it doesn't already exist
      } else {
        alert("Task already exists!"); // Notify the user if the task already exists
      }
    }
  };

  const handleDeleteTask = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  const handleEditTask = (taskId, updatedTask) => {
    dispatch(editTask(taskId, updatedTask));
  };

  return (
    <div className="container mt-4">
      <h1 className="mb-4">To-Do App</h1>
      <Link href="/create-task" className="btn btn-primary mb-4">
        Create New Task
      </Link>
      <div className="row">
        {tasks.map((task) => (
          <div className="col-md-4" key={task.id}>
            <Task
              task={task}
              onDelete={handleDeleteTask}
              onEdit={handleEditTask}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
