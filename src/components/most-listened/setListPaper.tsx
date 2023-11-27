import React, { ReactNode } from 'react';

interface ILayoutProps {
  children?: ReactNode;
}

function SetListPaper({ children }: ILayoutProps) {
  return (
    <div className="flex justify-center">
      <div className="w-80 max-w-96 p-4 bg-center bg-cover bg-[url('/white-paper-texture-background.jpg')]">
        {children}
      </div>
    </div>
  );
}

export default SetListPaper;
