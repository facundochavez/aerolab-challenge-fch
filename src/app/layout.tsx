'use client';
import './globals.css';
import Header from './components/Header';
import WavesBackground from './components/WavesBackground';
import ThemeProvider from '@/components/theme-provider';
import Footer from './components/Footer';
import { Toaster } from '@/components/ui/sonner';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import { metadata } from '@/app/metadata';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
  metadata?: {
    title: string;
    description: string;
    icons: {
      icon: string;
    };
  };
}) {
  return (
    <html lang='en'>
      <head>
        <title>{metadata.title}</title>
        <meta name='description' content={metadata.description} />
        <link rel='icon' href={metadata.icons.icon} />
      </head>
      <body className={montserrat.className} lang='en'>
        <ThemeProvider attribute='class' defaultTheme='light'>
          <Provider store={store}>
            <WavesBackground />
            <Header />
            <main className='w-screen flex flex-col items-center gap-10 lg:gap-20 px-[5%] pt-[79px] lg:pt-[127px]'>
              {children}
            </main>
            <Footer />
            <Toaster position='bottom-left' />
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}
