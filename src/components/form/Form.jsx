import React, { Component } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import "../../scss/main.scss";
import { v4 as uuidv4 } from "uuid";

export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      phone: "",
      add: false,
    };
  }

  handleAddUser = () => {
    this.setState((prevState) => ({
      add: !prevState.add,
    }));
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = {
      id: uuidv4(),
      name: formData.get("name"),
      username: formData.get("username"),
      phone: formData.get("phone"),
    };
    this.props.onAddUser(newUser);
    this.setState({
      name: "",
      username: "",
      phone: "",
      add: false,
    });
  };

  handleSetForm = () => {
    this.setState({
      name: "",
      username: "",
      phone: "",
      add: false,
    });
  };
  render() {
    return (
      <Box className="contactForm">
        <Button onClick={this.handleAddUser} variant="outlined">
          Add
        </Button>
        {this.state.add && (
          <Box sx={{ "& > :not(style)": { m: 1 } }}>
            <FormControl
              component="form"
              onSubmit={this.handleSubmit}
              sx={{
                gap: "20px",
              }}
            >
              <TextField
                id="name"
                label="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="username"
                label="Username"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <TextField
                id="phone"
                label="Phone"
                type="phone"
                name="phone"
                value={this.state.phone}
                onChange={this.handleChange}
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <AccountCircle />
                    </InputAdornment>
                  ),
                }}
                variant="standard"
              />
              <Box
                sx={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "space-between",
                }}
              >
                <Button type="submit" variant="contained">
                  Submit
                </Button>
                <Button onClick={this.handleSetForm} variant="outlined">
                  Cansel
                </Button>
              </Box>
            </FormControl>
          </Box>
        )}
      </Box>
    );
  }
}
