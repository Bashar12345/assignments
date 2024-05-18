"use client";

import React, { useState } from "react";

const Task = ({ task, onDelete, onEdit }) => {
  const [description, setDescription] = useState(task.description);

  const handleDelete = () => {
    onDelete(task.id);
  };

  const handleEdit = () => {
    const updatedTitle = prompt("Enter updated title:", task.title);
    const updatedDescription = prompt(
      "Enter updated description:",
      description
    );
    if (updatedTitle && updatedDescription) {
      const updatedTask = {
        ...task,
        title: updatedTitle,
        description: updatedDescription,
      };
      onEdit(task.id, updatedTask);
      setDescription(updatedDescription); // Update local state with the new description
    }
  };

  return (
    <div className="card m-2">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <p className="card-text">{description}</p>
        <button className="btn btn-danger me-2" onClick={handleDelete}>
          Delete
        </button>
        <button className="btn btn-primary" onClick={handleEdit}>
          Edit
        </button>
      </div>
    </div>
  );
};

export default Task;
