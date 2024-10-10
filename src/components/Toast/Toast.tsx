import { toast } from 'sonner';

const Toast = ({ productName }: { productName: string }) => {
  const toastKey = Math.random().toString(36).substring(2, 9);

  return (
    <div
      onClick={() => toast.dismiss()}
      className='w-full min-h-[56px] bg-green-default'
    >
      Close toast
    </div>
  );
};

export default Toast;
