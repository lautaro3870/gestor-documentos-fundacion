'use client';
import { ListCardsStruct } from '@/utils/interfaces/interface';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Link from 'next/link';
import { useState } from 'react';

type DownloadLinkProps = {
  project: ListCardsStruct;
};

export default function DownloadLink({ project }: DownloadLinkProps) {
  const [isHover, setIsHover] = useState(false);

  const handleMouseEnter = () => {
    setIsHover(true);
  };

  const handleMouseLeave = () => {
    setIsHover(false);
  };

  return (
    <Box
      sx={{
        width: {
          xl: '20rem',
          lg: '20rem',
          md: '20rem',
          sm: '20rem',
          xs: 'auto',
        },
      }}
    >
      <Link
        href={project?.pdf || ''}
        color="primary"
        target="_blank"
        style={{
          height: '3rem',
          border: 'solid',
          borderWidth: 1,
          borderColor: '#1e88e5',
          display: 'flex',
          alignItems: 'center',
          borderRadius: 6,
          backgroundColor: isHover ? '#1e88e5' : '#f5f5f5',
          textDecoration: 'none'
        }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Grid
          container
          spacing={2}
          sx={{
            width: '100%',
          }}
        >
          <Grid size={10}>
            <Typography
              variant="h6"
              sx={{ color: 'text.primary', fontSize: 15, marginLeft: 3 }}
            >
              Descargar
            </Typography>
          </Grid>
          <Grid size={2}>
            <FileDownloadIcon />
          </Grid>
        </Grid>
      </Link>
    </Box>
  );
}
