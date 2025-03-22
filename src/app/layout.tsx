import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './StyledRoot';
import { AppWrapper } from '@/context';
import { Metadata } from 'next';
import Header from './components/Header/Header';

export const metadata: Metadata = {
  title: 'Gestor Documentos',
  icons:
    'https://fundacionbariloche.org.ar/wp-content/uploads/2023/09/LOGO-FB-WEB.png',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppWrapper>
          <AppRouterCacheProvider>
            <Header />
            <StyledRoot>{children}</StyledRoot>
          </AppRouterCacheProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
