'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      variant='secondary'
      className='px-2 sm:px-3'
      onClick={() => setTheme(() => (theme === 'light' ? 'dark' : 'light'))}
    >
      <Sun
        className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'
        strokeWidth={1.8}
      />
      <Moon
        className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'
        strokeWidth={1.8}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
