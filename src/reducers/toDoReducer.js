import {
  ADD_TASK,
  TOGGLE_TASK_STATUS,
  DELETE_TASK,
} from "../actions/actionTipes";

const initialState = {
  tasks: [],
  doneTasks: [],
};

const toDoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case TOGGLE_TASK_STATUS:
      const  id  = action.payload;
      const taskIndex = state.tasks.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        const taskToMove = state.tasks[taskIndex];
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== id),
          doneTasks: [...state.doneTasks, taskToMove],
        };
      } else {
        const doneTaskIndex = state.doneTasks.findIndex(
          (task) => task.id === id
        );
        if (doneTaskIndex !== -1) {
          const taskToMove = state.doneTasks[doneTaskIndex];
          return {
            ...state,
            doneTasks: state.doneTasks.filter((task) => task.id !== id),
            tasks: [...state.tasks, taskToMove],
          };
        }
      }
      return state;
    case DELETE_TASK:
      const  taskId = action.payload;
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== taskId),
        doneTasks: state.doneTasks.filter((task) => task.id !== taskId),
      };
    default:
      return state;
  }
};

export default toDoReducer;
