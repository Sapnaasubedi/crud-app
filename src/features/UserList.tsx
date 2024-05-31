"use client";

import { Stack, Typography } from "@mui/material";
import { type FC } from "react";
import { User } from "./user.type";
import ListTable, { TableColumn } from "@/common/table";
import { HandleRedirect } from "@/types/route";

const columns = (): Array<TableColumn<User>> => [
  {
    dataIndex: `fname`,
    title: `First Name`,
  },
  { dataIndex: `lname`, title: `Last Name` },
  { dataIndex: `email`, title: `Email` },
  {
    dataIndex: `action`,
    title: `Action`,
  },
];

interface UserListProps {
  isValidating: boolean;
  items?: User[];
}

const UserList: FC<UserListProps> = ({ isValidating, items = [] }) => {
  return (
    <Stack spacing={2} className="py-large">
      <ListTable  isValidating={isValidating} columns={columns()} data={items} />
    </Stack>
  );
};

export default UserList;
