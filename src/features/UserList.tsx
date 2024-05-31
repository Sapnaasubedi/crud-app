"use client";

import { IconButton, Stack, TablePagination, Typography } from "@mui/material";
import { type FC, type MouseEvent } from "react";
import { MdMoreVert } from "react-icons/md";
import { User } from "./user.type";
import ListTable, { TableColumn } from "@/common/table";

interface UserColumns {
  handleActionMenuOpen: (
    user: User
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  handleRedirect: (url: string) => () => void;
}

const columns = ({
  handleActionMenuOpen,
  handleRedirect,
}: UserColumns): Array<TableColumn<User>> => [
  {
    dataIndex: `fname`,
    title: `First Name`,
    render: (name: string, user) => (
      <Typography
        variant="body2"
        component="p"
        color="blue"
        sx={{ cursor: `pointer` }}
        onClick={handleRedirect(`/admin/Users/${user.id}`)}
      >
        {name}
      </Typography>
    ),
  },
  { dataIndex: `lName`, title: `Last Name` },
  { dataIndex: `email`, title: `Email` },
  {
    dataIndex: `action`,
    title: `Action`,
    render: (_, User) => (
      <IconButton aria-label="action" onClick={handleActionMenuOpen(User)}>
        <MdMoreVert />
      </IconButton>
    ),
  },
];

interface UserListProps {
  isValidating: boolean;
  items?: User[];
  handleActionMenuOpen: (
    user: User
  ) => (event: MouseEvent<HTMLButtonElement>) => void;
  handleRedirect: (url: string) => () => void;
}

const UserList: FC<UserListProps> = ({
  isValidating,
  items = [],
  handleActionMenuOpen,
  handleRedirect,
}) => {
  return (
    <Stack spacing={2} className="py-large">
      <ListTable
        isValidating={isValidating}
        columns={columns({ handleActionMenuOpen, handleRedirect })}
        data={items}
      />
    </Stack>
  );
};

export default UserList;
