import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
  className?: string;
}

export const UpperCard: React.FC<Props> = ({ className }) => {
  return (
    <>
      <div className="flex flex-wrap gap-3 max-w-[435px] h-[596px]">
        <Card className={cn("rounded-3xl", className)}>
          <CardHeader>
            <CardTitle className='text-4xl text-[#353B46]'>Today’s Deals</CardTitle>
          </CardHeader>
          <CardContent className="grid gap-4">
            <div>
              
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default UpperCard;