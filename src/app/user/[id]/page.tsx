import UserEntry from "@/features/UserEntry";
import UserList from "@/features/UserList";
import { IUserEntry, User } from "@/features/user.type";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  IconButton,
  Typography,
} from "@mui/material";
import React from "react";
import { SubmitHandler } from "react-hook-form";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from "axios";
import { error } from "console";

const UserEntryPage = async () => {
  const onSubmit: SubmitHandler<IUserEntry> = async (user) => {
    await axios
      .post("http://localhost:9000/api/create", user)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      <Box>
        <Container>
          <IconButton color="primary" size="large">
            <IoIosArrowDropleft />
          </IconButton>
        </Container>
      </Box>
      <Container>
        <Card style={{ borderRadius: `16px`, border: `2px solid #4158FF` }}>
          <CardContent sx={{ p: 4 }}>
            <UserEntry onSubmit={onSubmit} />
          </CardContent>
        </Card>
       
      </Container>
    </>
  );
};

export default UserEntryPage;
