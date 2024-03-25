import { Box } from "@mui/material";
import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../scss/main.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: "",
    };
  }
  render() {
    return (
      <Box className="listContainer">
        <ul className="ulList">
          {this.props.taskList?.doneTasks?.map((item) => (
            <li key={item.id} className="doneList">
              <Box
                onClick={() => this.props.handleTaskDone(item.id)}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <p>{item.task}</p>
              </Box>
              <IconButton
                onClick={() => this.props.handleDeleteTask(item.id)}
                edge="end"
                aria-label="delete"
              >
                <DeleteIcon />
              </IconButton>
            </li>
          ))}
          {this.props.taskList?.tasks?.map((item) => (
            <li key={item.id} className="list">
              <Box
                onClick={() => this.props.handleTaskDone(item.id)}
                sx={{
                  width: "100%",
                  cursor: "pointer",
                }}
              >
                <p>{item.task}</p>
              </Box>
              <IconButton
                onClick={() => this.props.handleDeleteTask(item.id)}
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
  }
}
