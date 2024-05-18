// src/store/reducers.js

import { ADD_TASK, DELETE_TASK, EDIT_TASK } from "./actions";

const initialState = {
  tasks: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      // Check if the task already exists in the state before adding it
      const existingTaskIndex = state.tasks.findIndex(
        (task) => task.id === action.payload.id
      );
      if (existingTaskIndex === -1) {
        return {
          ...state,
          tasks: [...state.tasks, action.payload], // Add the task only if it doesn't already exist
        };
      } else {
        return state; // Return the current state if the task already exists
      }
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    case EDIT_TASK:
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.taskId ? action.payload.updatedTask : task
        ),
      };
    default:
      return state;
  }
};

export default rootReducer;
