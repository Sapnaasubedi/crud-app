import { Stack } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <Stack alignItems="center" justifyContent="space-between">  <Link href={`/user`}>Do User Setup</Link></Stack>
  
  )
}

export default page