"use client";
import UserEntry from "@/features/UserEntry";
import { IUserEntry, User } from "@/features/user.type";
import {
  Box,
  Card,
  CardContent,
  Container,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { IoIosArrowDropleft } from "react-icons/io";
import axios from "axios";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";
import { isMongoId } from "@/types/string";
import router from "next/router";

const UserEntryPage = async () => {
  const params = useParams();
  const id = params.id as string;

  const edit = isMongoId(id);

  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const handleCloseSnackbar = () => {
    setSuccessMessage(null);
  };

  async function getUserById(id: string): Promise<User> {
    const res = await fetch(`http://localhost:9000/api/getOne/${id}`);

    if (!res.ok) {
      throw new Error("Failed to fetch users");
    }

    return res.json() as Promise<User>;
  }

  const onSubmit: SubmitHandler<IUserEntry> = async (user) => {
    try {
      edit
        ? await axios.put(`http://localhost:9000/api/update/${id}`, user)
        : await axios.post(`http://localhost:9000/api/create`, user);

      setSuccessMessage("User updated successfully!");
      router.push("/user");
    } catch (error) {
      console.log(error);
    }
  };

  const [users] = await Promise.all([getUserById(id)]);
  console.log(id);

  return (
    <>
      <Box>
        <Container>
          <IconButton color="primary" size="large">
            <Link href={`/user`}>
              <IoIosArrowDropleft />
            </Link>
          </IconButton>
        </Container>
      </Box>
      <Container>
        <Card style={{ borderRadius: `16px`, border: `2px solid #4158FF` }}>
          <CardContent sx={{ p: 4 }}>
            <UserEntry onSubmit={onSubmit} data={users} />
            <Snackbar
              open={!!successMessage}
              autoHideDuration={3000}
              onClose={handleCloseSnackbar}
              message={successMessage}
              action={
                <IconButton
                  size="small"
                  aria-label="close"
                  color="inherit"
                  onClick={handleCloseSnackbar}
                >
                  <IoClose fontSize="small" />
                </IconButton>
              }
            />
          </CardContent>
        </Card>
      </Container>
    </>
  );
};

export default UserEntryPage;
