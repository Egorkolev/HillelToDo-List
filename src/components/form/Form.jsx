import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import "../../scss/main.scss";
import { v4 as uuidv4 } from "uuid";
import { FormControl } from "@mui/material";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const newTask = {
      id: uuidv4(),
      task: this.state.task,
    };
    this.props.handleAddTask(newTask);
    this.setState({
      task: "",
    });
  };

  render() {
    return (
      <Box className="contactForm">
        <FormControl>
          <form
            onSubmit={this.handleSubmit}
            style={{
              display: "flex",
            }}
          >
            <TextField
              id="task"
              label="Task"
              type="text" 
              name="task"
              value={this.state.task}
              onChange={this.handleChange}
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
  }
}
