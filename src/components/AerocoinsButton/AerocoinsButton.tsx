import { useGlobalContext } from '@/context/global.context';
import { Button } from '@/components/ui/button';
import formatedNumber from '@/utils/formatedNumber';
import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useState } from 'react';
import { Separator } from '../ui/separator';

const AerocoinsButton = () => {
  const { aerocoins } = useGlobalContext();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(1);
  const addNumers = [1000, 5000, 7500];

  return (
    <DropdownMenu
      open={isDropdownOpen}
      onOpenChange={() => setIsDropdownOpen(!isDropdownOpen)}
    >
      <DropdownMenuTrigger asChild>
        <Button variant='secondary'>
          <Image
            src='/icons/icon-aerolab.svg'
            alt='icon-aerolab'
            width={1}
            height={1}
            className='w-5 lg:w-6 h-5 lg:h-6'
          />
          <span className='l1-text-default'>{formatedNumber(aerocoins)}</span>
          <Image
            src='/icons/chevron-right.svg'
            alt='icon-chevron'
            width={1}
            height={1}
            className={`w-5 lg:w-6 h-5 lg:h-6 transition-transform duration-100 ${
              isDropdownOpen ? 'rotate-[-90deg]' : 'rotate-[90deg]'
            }`}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align='end'
        className='px-5 pt-3 pb-5 flex flex-col gap-3 w-[312px] max-w-[90vw]'
      >
        <DropdownMenuLabel className='flex items-center justify-between px-0'>
          <span className='l1-text-default text-neutral-900'>Add Balance</span>
          <Image
            src='/icons/close.svg'
            alt='Close icon'
            width={1}
            height={1}
            className='w-5 lg:w-6 h-5 lg:h-6 cursor-pointer hover:opacity-85'
            onClick={() => setIsDropdownOpen(false)}
          />
        </DropdownMenuLabel>
        <Separator className='-mx-5 w-[120%]' />
        <Image
          src='/images/aerocard.svg'
          alt='Aerocard'
          width={1}
          height={1}
          objectFit='cover'
          className='w-full my-2'
        />
        <div className='flex gap-2'>
          {addNumers.map((num, index) => (
            <Button
              key={index}
              variant={selectedIndex === index ? 'selected' : 'selector'}
              onClick={() => setSelectedIndex(index)}
              className='w-full max-h-[35px]'
            >
              <span className='l1-text-default'>{formatedNumber(num)} </span>
            </Button>
          ))}
        </div>
        <Button className='w-full'>
          <Image
            src='/icons/icon-aerolab-white.svg'
            alt='icon-aerolab'
            width={1}
            height={1}
            className='w-5 lg:w-6 h-5 lg:h-6'
          />
          <span className='l1-text-default'>Add Points</span>
        </Button>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default AerocoinsButton;
