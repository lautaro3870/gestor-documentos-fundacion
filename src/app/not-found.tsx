'use client';

import { Typography } from '@mui/material';

export default function ErrorPage() {
  return (
    <div
      style={{
        display: 'flex',
        marginTop: '10rem',
        alignItems: 'center',
        height: '90vh',
        flexDirection: 'column'
      }}
    >
      <Typography variant='h1'>404</Typography>
      <Typography variant='h5'>Proyecto no encontrado</Typography>
      <Typography variant='h6'>Por favor, intente con otro proyecto</Typography>
    </div>
  );
}
