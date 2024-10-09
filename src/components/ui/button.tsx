import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          '!h-10 lg:!h-12 rounded-[14px] lg:rounded-[16px] bg-gradient-to-r from-brand-default-1 to-brand-default-2 hover:from-brand-hover-1 hover:to-brand-hover-2 [&>span]:text-neutral-0 hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        outline:
          'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
        secondary:
          '!h-10 lg:!h-12 !rounded-[14px] lg:!rounded-[16px] bg-neutral-0 border border-neutral-300 text-secondary-foreground shadow-sm hover:bg-neutral-100 [&>span]:text-transparent [&>span]:bg-clip-text [&>span]:bg-gradient-to-r [&>span]:from-brand-default-1 [&>span]:to-brand-default-2',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline',
        selector:
          '!px-1 !rounded-xl bg-[#E5F0FF] drop-shadow-none hover:opacity-85 [&>span]:text-transparent [&>span]:bg-clip-text [&>span]:bg-gradient-to-r [&>span]:from-brand-default-1 [&>span]:to-brand-default-2',
        selected:
          '!px-1 !rounded-xl bg-gradient-to-r from-brand-default-1 to-brand-default-2 drop-shadow-none hover:from-brand-hover-1 hover:to-brand-hover-2 [&>span]:text-neutral-0',
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
