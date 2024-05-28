"use client";
import UserEntry from '@/features/UserEntry'
import { IUserEntry } from '@/features/user.type';
import React from 'react'
import { SubmitHandler } from 'react-hook-form';

const page = () => {
  const onSubmit: SubmitHandler<IUserEntry> = (data) => {
    console.log(data);
  };  return (
    <div><UserEntry onSubmit={onSubmit}/></div>
  )
}

export default page