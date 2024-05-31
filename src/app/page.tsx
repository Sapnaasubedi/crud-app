"use client";
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

const page = () => {
  const onSubmit: SubmitHandler<IUserEntry> = (data) => {
    console.log(data);
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
        <UserList isValidating={false} handleActionMenuOpen={function (user: User): (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void {
              throw new Error("Function not implemented.");
            } } handleRedirect={function (url: string): () => void {
              throw new Error("Function not implemented.");
            } }/>
      </Container>
    </>
  );
};

export default page;
