import { Box } from "@mui/material";
import React from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useSelector, useDispatch } from "react-redux";
import {
  toggleTaskStatus,
  deleteTask,
} from "../../actions/toDoActions";
import "../../scss/main.scss";

export const List = () => {
  const tasks = useSelector((state) => state?.tasks);
  const doneTasks = useSelector((state) => state?.doneTasks);
  const dispatch = useDispatch();

  const handleTaskDone = (id) => {
    dispatch(toggleTaskStatus(id));
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  console.log("tasks", tasks);
  console.log("tasks", doneTasks);
  return (
    <Box className="listContainer">
      <ul className="ulList">
        {doneTasks?.map((item) => (
          <li key={item.id} className="doneList">
            <Box
              onClick={() => handleTaskDone(item.id)}
              sx={{
                width: "100%",
                cursor: "pointer",
              }}
            >
              <p>{item.task}</p>
            </Box>
            <IconButton
              onClick={() => handleDeleteTask(item.id)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
        {tasks?.map((item) => (
          <li key={item.id} className="list">
            <Box
              onClick={() => handleTaskDone(item.id)}
              sx={{
                width: "100%",
                cursor: "pointer",
              }}
            >
              <p>{item.task}</p>
            </Box>
            <IconButton
              onClick={() => handleDeleteTask(item.id)}
              edge="end"
              aria-label="delete"
            >
              <DeleteIcon />
            </IconButton>
          </li>
        ))}
      </ul>
    </Box>
  );
};
