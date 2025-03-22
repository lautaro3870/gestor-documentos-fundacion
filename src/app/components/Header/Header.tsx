import { AppBar, Container, Toolbar } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

export default function Header() {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: 'white' }}
      style={{ marginBottom: '0.5rem' }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Link href="/">
            <Image
              src="https://fundacionbariloche.org.ar/wp-content/uploads/2023/09/LOGO-FB-WEB.png"
              alt="Fundación Bariloche"
              width={200}
              height={50}
            />
          </Link>
          <Link href="https://www.conicet.gov.ar/new_scp/detalle.php?id=23509&info_general=yes&inst=yes">
            <Image
              style={{ marginLeft: '1rem' }}
              src="https://fundacionbariloche.org.ar/wp-content/uploads/2024/02/conicet-e1714409912425.png"
              alt="Conicet"
              width={100}
              height={50}
            />
          </Link>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
