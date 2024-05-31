"use client";
import UserEntry from "@/features/UserEntry";
import { IUserEntry } from "@/features/user.type";
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
      </Container>
    </>
  );
};

export default page;
