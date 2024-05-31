"use client";
import UserEntry from "@/features/UserEntry";
import { IUserEntry } from "@/features/user.type";
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
import { useRouter } from "next/navigation";
import { IoClose } from "react-icons/io5";

const UserEntryPage = async () => {
  const router = useRouter();
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const handleCloseSnackbar = () => {
    setSuccessMessage(null); 
};
  const onSubmit: SubmitHandler<IUserEntry> = async (user) => {
    await axios
      .post("http://localhost:9000/api/create", user)
      .then((res) => {
        console.log(res);
        setSuccessMessage("User Created successfully!");
        router.push("/user");
      })
      .catch((error) => console.log(error));
  };

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
            <UserEntry onSubmit={onSubmit} />
            <Snackbar
                open={!!successMessage}
                autoHideDuration={3000}
                onClose={handleCloseSnackbar}
                message={successMessage}
                action={
                    <IconButton size="small" aria-label="close" color="inherit" onClick={handleCloseSnackbar}>
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
