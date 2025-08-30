import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden text-foreground font-display">
      {/* Subtle tech background pattern */}
      <div className="absolute inset-0 bg-circuit-pattern opacity-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/40" />
      <div className="flex relative z-10">
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