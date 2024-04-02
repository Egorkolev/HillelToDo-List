import React from "react";
import Box from "@mui/material/Box";
import { List } from "../list/List";
import { Form } from "../form/Form";

export const ToDoList = () => {
  return (
    <>
      <h1 className="title">To Do List</h1>
      <Box className="contactList">
        <List />
        <Form />
      </Box>
    </>
  );
};
