import axios from "axios";
import React, { Component } from "react";
import Box from "@mui/material/Box";
import List from "../list/List";
import Form from "../form/Form";

export default class ContactsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
    this.fetchData = this.fetchData.bind(this);
  }

  async fetchData() {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      const data = response.data.map((user) => ({
        id: user.id,
        name: user.name,
        username: user.username,
        phone: user.phone,
      }));
      this.setState({ users: data });
    } catch (error) {
      console.error(error);
    }
  }

  componentDidMount() {
    this.fetchData();
  }

  handleDeleteUser = (id) => {
    this.setState((prevUsers) => ({
      users: prevUsers.users.filter((user) => user.id !== id),
    }));
  };

  handleAddUser = (user) => {
    this.setState((prevState) => ({
      users: [...prevState.users, user],
    }));
  };

  render() {
    console.log(this.state.users);
    return (
      <>
        <h1 className="title">Contacts</h1>
        <Box className="contactList">
          <List list={this.state.users} onDeleteUser={this.handleDeleteUser} />
          <Form onAddUser={this.handleAddUser} />
        </Box>
      </>
    );
  }
}
