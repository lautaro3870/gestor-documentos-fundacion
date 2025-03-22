import { CardMedia } from '@mui/material';
import Grid from '@mui/material/Grid2';
import SeparatorLine from './SeparatorLine/SeparatorLine';
import DirectionSection from './DirectionSection/DirectionSection';
import Link from 'next/link';

export default function Footer() {
  return (
    <Grid
      container
      spacing={{
        xs: 5,
        lg: 10,
      }}
      sx={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '4rem',
        marginTop: '4rem',
      }}
    >
      <Grid
        sx={{
          xl: 2,
          xs: 12,
          lg: 2,
        }}
      >
        <Link href="https://fundacionbariloche.org.ar/" target="_blank">
          <CardMedia
            sx={{ width: 'auto', height: 'auto' }}
            component="img"
            image="https://fundacionbariloche.org.ar/wp-content/uploads/2023/09/LOGO-FB-WEB-1963-150px-e1707943153646.png"
          />
        </Link>
      </Grid>
      <SeparatorLine />
      <DirectionSection />
    </Grid>
  );
}
