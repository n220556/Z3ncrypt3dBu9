import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground font-display">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 md:ml-0 min-h-screen">
          <div className="max-w-4xl mx-auto px-6 py-8 md:px-8 md:py-12">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}