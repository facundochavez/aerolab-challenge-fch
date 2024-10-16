'use client';
import { Moon, Sun } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useTheme } from 'next-themes';

const ModeToggle: React.FC = () => {
  const { setTheme, theme } = useTheme();

  return (
    <Button
      aria-label='Toggle theme'
      variant='secondary'
      className='px-2 lg:px-3'
      onClick={() => setTheme(() => (theme === 'light' ? 'dark' : 'light'))}
    >
      <Sun
        className='h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-neutral-500'
        strokeWidth={2.5}
      />
      <Moon
        className='absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-neutral-500'
        strokeWidth={2.5}
      />
      <span className='sr-only'>Toggle theme</span>
    </Button>
  );
};

export default ModeToggle;
