import { ADD_TASK, TOGGLE_TASK_STATUS, DELETE_TASK } from "./actionTipes";

export const addTask = (task) => ({
  type: ADD_TASK,
  payload: task,
});

export const toggleTaskStatus = (id) => ({
  type: TOGGLE_TASK_STATUS,
  payload: id,
});

export const deleteTask = (taskId) => ({
  type: DELETE_TASK,
  payload: taskId,
});
