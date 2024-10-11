import { toast } from 'sonner';
import Image from 'next/image';

type ToastType = 'success' | 'error';

export const showToast = (type: ToastType, title: string, message: string) => {
  toast[type](title, {
    description: ' ' + message,
    icon: (
      <Image
        src={`/icons/icon-${type}.svg`}
        alt={`${type} icon`}
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
