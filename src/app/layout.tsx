import './globals.css';
import Header from './components/Header';
import WavesBackground from './components/WavesBackground';
import ThemeProvider from '@/components/theme-provider';
import GlobalProvider from '@/context/global.context';
import Footer from './components/Footer';
import { Toaster } from "@/components/ui/sonner"

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
            <main className='w-screen flex flex-col items-center gap-10 lg:gap-20 px-[5%] pt-[79px] lg:pt-[127px]'>
              {children}
            </main>
            <Footer />
            <Toaster position='bottom-left'/>
          </GlobalProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
