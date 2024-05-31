import UserList from "@/features/UserList";
import {
  Button,
  Container,
  Stack,
} from "@mui/material";
import React, {  } from "react";
import { useNavigation } from "@/hooks/useNavigation";

const UserListPage = async () => {

  return (
    <Stack spacing={5} alignItems="center">
      <Container>
        <Button color="primary" size="large" variant="outlined">
          Add User
        </Button>
      </Container>
      <Container>
        <UserList
          isValidating={false}
          
        />
      </Container>
    </Stack>
  );
};

export default UserListPage;
