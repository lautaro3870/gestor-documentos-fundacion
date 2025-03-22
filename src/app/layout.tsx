import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
import { StyledRoot } from './StyledRoot';
import { AppWrapper } from '@/context';
import { Metadata } from 'next';

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
            <StyledRoot>{children}</StyledRoot>
          </AppRouterCacheProvider>
        </AppWrapper>
      </body>
    </html>
  );
}
