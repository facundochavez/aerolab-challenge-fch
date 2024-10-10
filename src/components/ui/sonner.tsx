'use client';
import { useTheme } from 'next-themes';
import { Toaster as Sonner } from 'sonner';

type ToasterProps = React.ComponentProps<typeof Sonner>;

const Toaster = ({ ...props }: ToasterProps) => {
  const { theme = 'light' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className='toaster group'
      toastOptions={{
        classNames: {
          toast:
            'group toast group-[.toaster]:bg-neutral-0 group-[.toaster]:text-foreground group-[.toaster]:border-border w-[360px] lg:w-[532px] border-[2px] items-start p-6',
          success: '!border-green-default',
          error: '!border-red-default',
          content: 'inline',
          title: 'l1-text-default text-neutral-900 inline',
          description:
            'group-[.toast]:l1-text-default l1-text-default text-neutral-600 inline',
          icon: 'w-[20px] h-[20px] lg:w-[26px] lg:h-[26px]',
          actionButton: 'group-[.toast]:!bg-transparent',
          cancelButton:
            'group-[.toast]:bg-muted group-[.toast]:text-muted-foreground',
        },
      }}
      {...props}
    />
  );
};

export { Toaster };
