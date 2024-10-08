import './globals.css';
import Footer from './sections/Footer';
import Header from './sections/Header';
import WavesBackground from './sections/WavesBackground';

export const metadata = {
  title: 'Aerolab Coding Challenge by Facundo Chavez',
  description:
    'This is a coding challenge for the Aerolab Coding Company. Created by Facundo Chavez.',
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    images: ['/favicon.svg'],
    title: 'Aerolab Coding Challenge by Facundo Chavez',
    description:
      'This is a coding challenge for the Aerolab Coding Company. Created by Facundo Chavez.',
  },
  robots: {
    google: 'notranslate',
  },
  metadataBase: new URL('https://aerolab-challenge-fch.vercel.app'),
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className='relative' lang='en'>
        <WavesBackground />
        <Header />
        <main className='w-screen flex flex-col items-center gap-10 sm:gap-16 px-[5%] pt-[85px] sm:pt-[95px] pb-10'>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
