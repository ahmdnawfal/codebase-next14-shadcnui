import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

type PropsMaxWidthWrapper = {
  children: ReactNode;
  className?: string;
};

const MaxWidthWrapper = ({ children, className }: PropsMaxWidthWrapper) => {
  return (
    <div
      className={cn(
        'mx-auto w-full max-w-screen-xl px-2.5 md:px-20',
        className
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
