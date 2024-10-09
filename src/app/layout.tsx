import './globals.css';
import Header from './sections/Header';
import WavesBackground from './sections/WavesBackground';
import ThemeProvider from '@/components/theme-provider';
import GlobalProvider from '@/context/global.context';

export const metadata = {
  title: 'Aerolab Coding Challenge by Facundo Chavez',
  description:
    'This is a coding challenge for the Aerolab Coding Company. Created by Facundo Chavez.',
  icons: {
    icon: '/aerolab-favicon.svg',
  },
  openGraph: {
    images: ['/metadata-image.jpg'],
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
        <ThemeProvider attribute='class' defaultTheme='light'>
          <GlobalProvider>
            <WavesBackground />
            <Header />
            <main className='w-screen min-h-[200vh] flex flex-col items-center gap-10 lg:gap-16 px-[5%] pt-[79px] lg:pt-[127px] pb-10 lg:pb-16'>
              {children}
            </main>
            {/* <Footer /> */}
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
