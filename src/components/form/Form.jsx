import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../../scss/main.scss";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "@mui/material";
import { useDispatch } from "react-redux";
import { addTask } from "../../actions/toDoActions";

export const Form = () => {
  const dispatch = useDispatch();
  const [task, setTask] = React.useState("");

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      task: task,
    };
    dispatch(addTask(newTask));
    setTask("");
  };

  return (
    <Box className="contactForm">
      <FormControl>
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
          }}
        >
          <TextField
            id="task"
            label="Task"
            type="text"
            name="task"
            value={task}
            onChange={handleChange}
            required
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Create Task
          </Button>
        </form>
      </FormControl>
    </Box>
  );
};
