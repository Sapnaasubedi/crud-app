"use client";

import { Button, Grid, Input, Stack } from '@mui/material';
import React, { useEffect } from 'react';
import {  Controller, Form, SubmitHandler } from 'react-hook-form';
import { IUserEntry, User } from './user.type';
import { FC } from 'react';
import FormInput from '@/common/form';
import { isEmpty } from '@/types/string';



const initialValue: IUserEntry = {
  fname: '',
  lname: '',
  email: '',
  password: ''
};
const { useForm } = Form;

interface UserEntryProps {
  onSubmit: SubmitHandler<IUserEntry>;
  data : User,
}
const UserEntry: FC<UserEntryProps> = ({
  onSubmit,
  data = undefined,
}) => {
  const [form] = useForm();

  const {
    control,
    handleSubmit,
  } = useForm({
    defaultValues: initialValue,
   
  });

  useEffect(() => {
    if (!isEmpty(data)) form.setFieldsValue({ data });
  }, [data, form]);
  
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
