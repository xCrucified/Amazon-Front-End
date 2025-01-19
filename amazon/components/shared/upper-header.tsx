import { cn } from '@/lib/utils';
import React from 'react';
import { Container } from './container';
import Link from 'next/link';
import { AlertDialogDemo } from './country-dialog';
import ComboboxLanguage from './checkbox-language';

interface Props {
  className?: string;
}

export const UpperHeader: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("w-[100%] h-[60px] bg-[#343a45]", className)}>
        <Container className='w-[1175px] h-[100%] outline flex justify-between p-2 items-center'>
            <div className='w-[115px]'>
                <label></label>
                <AlertDialogDemo />
            </div>

            <div className='w-[220px] text-white flex gap-1'>
              <label>New customer?</label>
              <Link href={'/'} className='border-b-[1.5px] border-dotted'>Start here.</Link>
            </div>

            <div className='w-[120px]'>
              <ComboboxLanguage className=''/>
            </div>
        </Container>
    </div>
  );
};

export default UpperHeader;