import { Poppins } from 'next/font/google';
import './globals.css';
import Container from '@/components/container/Container';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '500', '600', '700'],
});

export const metadata = {
  title: 'Hasan Arpat Store',
  description: 'Store page developed by Hasan Arpat',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={poppins.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
