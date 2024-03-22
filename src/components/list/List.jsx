import { Box } from "@mui/material";
import React, { Component } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import "../../scss/main.scss";

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box className="listContainer">
        <ul className="ulList">
          <li
            style={{ marginBottom: "10px", background: "lightBlue" }}
            className="list"
          >
            <Box
              sx={{
                width: 200,
              }}
            >
              <p>Name</p>
            </Box>
            <Box
              sx={{
                width: 200,
              }}
            >
              <p>Username</p>
            </Box>
            <Box
              sx={{
                width: 200,
                marginRight: 6,
              }}
            >
              <p>phone</p>
            </Box>
          </li>
          {this.props.list.map((user) => (
            <li key={user.id} className="list">
              <Box
                sx={{
                  width: 200,
                }}
              >
                <p>{user.name}</p>
              </Box>
              <Box
                sx={{
                  width: 200,
                }}
              >
                <p>{user.username}</p>
              </Box>
              <Box
                sx={{
                  width: 200,
                }}
              >
                <p>{user.phone}</p>
              </Box>
              <IconButton
                onClick={() => this.props.onDeleteUser(user.id)}
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