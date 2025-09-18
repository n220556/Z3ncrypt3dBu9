import { ReactNode } from 'react';
import { Sidebar } from './Sidebar';
interface LayoutProps {
  children: ReactNode;
}
export function Layout({
  children
}: LayoutProps) {
  return <div className="min-h-screen bg-gradient-hero relative overflow-hidden text-foreground font-display">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-modern-mesh opacity-30" />
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Subtle animated background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="flex relative z-10">
        <Sidebar />
        <main className="flex-1 md:ml-0 min-h-screen">
          <div className="max-w-6xl mx-auto px-6 py-8 bg-slate-700 md:px-0 md:py-0">
            {children}
          </div>
        </main>
      </div>
    </div>;
}