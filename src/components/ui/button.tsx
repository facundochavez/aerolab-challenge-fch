import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-500 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          '!h-10 lg:!h-12 rounded-[14px] lg:rounded-[16px] bg-brand-gradient [&>span]:text-white hover:bg-primary/90',
        disabled:
          '!h-10 lg:!h-12 rounded-[14px] lg:rounded-[16px] bg-neutral-200 [&>span]:text-neutral-600 cursor-auto',
        processing:
          '!h-10 lg:!h-12 rounded-[14px] lg:rounded-[16px] bg-brand-gradient opacity-70 [&>span]:text-neutral-0 bg-opacity-70 cursor-auto',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          '!h-10 lg:!h-12 !rounded-[14px] lg:!rounded-[16px] bg-neutral-0 border border-neutral-300 text-secondary-foreground shadow-sm shadow-neutral-500/5 dark:shadow-none hover:bg-neutral-100 dark:hover:bg-[#262f39] [&>span]:text-brand-gradient',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        selector:
          '!px-1 !rounded-xl bg-[#E5F0FF] dark:bg-[#E5F0FF]/10 drop-shadow-none hover:opacity-85 dark:[&>span]:text-white dark:[&>span]:font-medium',
        selected:
          '!px-1 !rounded-xl bg-brand-gradient drop-shadow-none [&>span]:text-white',
        pagination:
          '!px-1 !rounded-xl w-[36px] h-[36px] lg:w-[40px] lg:h-[40px] bg-brand-light hover:opacity-80 disabled:!opacity-30 disabled:bg-neutral-200 dark:bg-neutral-100/30',
      },
      size: {
        default: 'h-9 px-4 py-2',
        sm: 'h-8 rounded-md px-3 text-xs',
        lg: 'h-10 rounded-md px-8',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={
          cn(buttonVariants({ variant, size, className })) +
          ' !gap-2 lg:!gap-2.5 drop-shadow-sm [&>span]:!leading-none'
        }
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
