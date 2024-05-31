import UserList from "@/features/UserList";
import {
  Button,
  Container,
  Stack,
} from "@mui/material";
import React, {  } from "react";
import axios from "axios";
import { User } from "@/features/user.type";
import Link from "next/link";

const UserListPage = async () => {
  async function getUser(): Promise<User[]> {
   
    const res = await fetch(`http://localhost:9000/api/getAll`);
  
    if (!res.ok) {
      throw new Error("Failed to fetch assignment");
    }
  
    return res.json() as Promise<User[]>;
  }
  const [user] = await Promise.all([getUser()]);
  return (
    <Stack spacing={5} alignItems="center">
      <Container>
        <Button color="primary" size="large" variant="outlined" >
      <Link href={`/user/add`}>Add User</Link>    
        </Button>
      </Container>
      <Container>
        <UserList
          isValidating={false}
          items={user as User[]}
        />
      </Container>
    </Stack>
  );
};

export default UserListPage;
