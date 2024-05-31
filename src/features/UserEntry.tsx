"use client";

import { Button, Grid, Input, Stack } from '@mui/material';
import React from 'react';
import {  Controller, SubmitHandler, useForm } from 'react-hook-form';
import { IUserEntry } from './user.type';
import { FC } from 'react';
import FormInput from '@/common/form';



const initialValue: IUserEntry = {
  fname: '',
  lname: '',
  email: '',
  password: ''
};
interface UserEntryProps {
  onSubmit: SubmitHandler<IUserEntry>;
}
const UserEntry: FC<UserEntryProps> = ({
  onSubmit,
}) => {
  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: initialValue,
   
  });
   return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <Stack spacing={6}>
      <Grid container gap={2}>
        <Grid item md={12}>
          <Controller
            name="fname"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <FormInput
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type="text"
                size="small"
                label="First Name"
                placeholder="Jhon"
                fullWidth
                sx={{ p: 1, backgroundColor: '#F3F3F3' }}
              />
            )}
          />
        </Grid>
        
        <Grid item md={12}>
          <Controller
            name="lname"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <FormInput
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type="text"
                size="small"
                label="Last Name"

                placeholder="Doe"
                fullWidth
                sx={{ p: 1, backgroundColor: '#F3F3F3' }}
              />
            )}
          />
        </Grid>
        <Grid item md={12}>
          <Controller
            name="email"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <FormInput
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type="email"
                size="small"
                label="Email"

                placeholder="johndoe@gmail.com"
                fullWidth
                sx={{ p: 1, backgroundColor: '#F3F3F3' }}
              />
            )}
          />
        </Grid>
        <Grid item md={12}>
          <Controller
            name="password"
            control={control}
            render={({ field: { name, onChange, value } }) => (
              <FormInput
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                type="password"
                size="small"
                label="Password"

                placeholder="*****"
                fullWidth
                sx={{ p: 1, backgroundColor: '#F3F3F3' }}
              />
            )}
          />
        </Grid>
        <Grid item md={12}>
        <Button type="submit" variant="outlined">Submit</Button>
</Grid>
      </Grid>
    </Stack>
  </form>
);}
 
;

export default UserEntry;
