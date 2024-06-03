"use client";

import { Stack, Typography } from "@mui/material";
import { type FC } from "react";
import { User } from "./user.type";
import ListTable, { TableColumn } from "@/common/table";
import { HandleRedirect } from "@/types/route";
import Link from "next/link";
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const columns = (): Array<TableColumn<User>> => [
  {
    dataIndex: `fname`,
    title: `First Name`,
  },
  { dataIndex: `lname`, title: `Last Name` },
  { dataIndex: `email`, title: `Email` },
  {
    title: `Action`,
    dataIndex: `id`,
    render: (_, data) => (
      <Stack direction="row" spacing={4}>
        <Link href={`user/${data.id}`} style={{ color: "green", maxWidth:"30px" }}>
          <FaRegEdit />
        </Link>
        <Link href={`user/${data.id}`} style={{ color: "red",width:"100px"}}>
          <MdDelete />
        </Link>
      </Stack>
    ),
  },
];

interface UserListProps {
  isValidating: boolean;
  items?: User[];
}

const UserList: FC<UserListProps> = ({ isValidating, items = [] }) => {
  return (
    <Stack spacing={2} className="py-large">
      <ListTable isValidating={isValidating} columns={columns()} data={items} />
    </Stack>
  );
};

export default UserList;
