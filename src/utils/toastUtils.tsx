import { toast } from 'sonner';
import Image from 'next/image';

export const showSuccessToast = (productName: string) => {
  toast.success(productName, {
    description: ' redeemed successfully',
    icon: (
      <Image
        src='/icons/icon-success.svg'
        alt='Success icon'
        width={1}
        height={1}
        className='w-10 h-10'
      />
    ),
    action: {
      label: (
        <Image
          src='/icons/close.svg'
          alt='Close icon'
          width={1}
          height={1}
          className='w-5 lg:w-6 h-5 lg:h-6 cursor-pointer hover:opacity-85'
        />
      ),
      onClick: () => {},
    },
  });
};

export const showErrorToast = () => {
  toast.error('', {
    description: 'There was a problem with the transaction',
    icon: (
      <Image
        src='/icons/icon-error.svg'
        alt='Error icon'
        width={1}
        height={1}
        className='w-10 h-10'
      />
    ),
    action: {
      label: (
        <Image
          src='/icons/close.svg'
          alt='Close icon'
          width={1}
          height={1}
          className='w-5 lg:w-6 h-5 lg:h-6 cursor-pointer hover:opacity-85'
        />
      ),
      onClick: () => {},
    },
  });
};
