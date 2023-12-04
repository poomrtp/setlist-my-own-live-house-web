import React, { ReactNode, Ref, forwardRef } from 'react';

interface ILayoutProps {
  children?: ReactNode;
  isLoading?: boolean;
}

const SetListPaper = forwardRef(
  ({ children, isLoading }: ILayoutProps, ref: Ref<HTMLDivElement>) => {
    if (isLoading)
      return (
        <div className="flex justify-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      );
    return (
      <div className="flex justify-center">
        <div
          ref={ref}
          className="w-80 max-w-96 p-4 bg-center bg-cover bg-[url('/white-paper-texture-background.jpg')]"
        >
          {children}
        </div>
      </div>
    );
  }
);

SetListPaper.displayName = 'SetListPaper';

export default SetListPaper;
