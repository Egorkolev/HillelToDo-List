import React, { Component } from "react";
import Box from "@mui/material/Box";
import List from "../list/List";
import Form from "../form/Form";

export default class ToDoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      doneTasks: [],
    };
  }

  handleAddTask = (task) => {
    console.log("task", task);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));
  };

  handleTaskDone = (id) => {
    this.setState((prevState) => {
      const taskIndex = prevState.tasks.findIndex((task) => task.id === id);
      const doneTaskIndex = prevState.doneTasks.findIndex(
        (task) => task.id === id
      );

      if (taskIndex !== -1) {
        const taskToMove = prevState.tasks[taskIndex];
        return {
          tasks: prevState.tasks.filter((task) => task.id !== id),
          doneTasks: [...prevState.doneTasks, taskToMove],
        };
      } else if (doneTaskIndex !== -1) {
        const taskToMove = prevState.doneTasks[doneTaskIndex];
        return {
          doneTasks: prevState.doneTasks.filter((task) => task.id !== id),
          tasks: [...prevState.tasks, taskToMove],
        };
      }
      return null;
    });
  };

  handleDeleteTask = (id) => {
    this.setState((prevTask) => {
      if (prevTask.tasks.some((task) => task.id === id)) {
        return {
          tasks: prevTask.tasks.filter((task) => task.id !== id),
        };
      } else if (prevTask.doneTasks.some((task) => task.id === id)) {
        return {
          doneTasks: prevTask.doneTasks.filter((task) => task.id !== id),
        };
      }
      return null;
    });
  };
  render() {
    return (
      <>
        <h1 className="title">To Do List</h1>
        <Box className="contactList">
          <List
            taskList={this.state}
            handleDeleteTask={this.handleDeleteTask}
            handleTaskDone={this.handleTaskDone}
          />
          <Form handleAddTask={this.handleAddTask} />
        </Box>
      </>
    );
  }
}
