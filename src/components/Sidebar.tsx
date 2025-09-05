import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Code, Briefcase, FileText, BookOpen, Tag, Mail, Menu, X, Terminal, Clock, FolderOpen } from 'lucide-react';
import profileImage from '@/assets/profile-image.jpg';
const navigation = [{
  name: 'Home',
  href: '/',
  icon: Home
}, {
  name: 'About',
  href: '/about',
  icon: User
}, {
  name: 'Skills',
  href: '/skills',
  icon: Code
}, {
  name: 'Projects',
  href: '/projects',
  icon: FolderOpen
}, {
  name: 'Services',
  href: '/services',
  icon: Briefcase
}, {
  name: 'Write-ups',
  href: 'https://z3ncrypt3dbu9writeups.vercel.app',
  icon: FileText,
  external: true
}, {
  name: 'Contact',
  href: '/contact',
  icon: Mail
}];
export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };
  return <>
      {/* Mobile menu button */}
      <button onClick={() => setIsOpen(!isOpen)} className="fixed top-4 left-4 z-50 md:hidden bg-card p-2 rounded-lg shadow-medium border border-border">
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-30 md:hidden" onClick={() => setIsOpen(false)} />}

      {/* Sidebar */}
      <aside className={`
        fixed top-0 left-0 z-40 h-full w-64 glass-card border-r border-border/40
        transform transition-all duration-300 ease-smooth backdrop-blur-xl
        md:translate-x-0 md:relative md:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-primary p-0.5 mb-4 group-hover:scale-105 transition-transform duration-300">
                <img 
                  src={profileImage}
                  alt="Raj Kumar Profile" 
                  className="w-full h-full rounded-full object-cover bg-card shadow-glow" 
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-secondary rounded-full border-2 border-background flex items-center justify-center">
                <div className="w-2 h-2 bg-background rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="font-display font-bold text-xl mb-2 gradient-text-animated">Raj Kumar</h1>
            <p className="text-sm text-muted-foreground text-center font-medium">
              Cybersecurity Professional
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1 font-mono">
              Penetration Tester | CTF Player
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map(item => {
              const Icon = item.icon;
              return <li key={item.name}>
                    {item.external ? (
                      <a 
                        href={item.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        onClick={() => setIsOpen(false)} 
                        className="flex items-center px-3 py-2.5 rounded-lg transition-all duration-200 group hover:bg-card-hover text-muted-foreground hover:text-foreground"
                      >
                        <Icon className="h-5 w-5 mr-3 transition-colors" />
                        <span className="font-medium">{item.name}</span>
                      </a>
                    ) : (
                      <NavLink to={item.href} onClick={() => setIsOpen(false)} className={`
                          flex items-center px-4 py-3 rounded-xl transition-all duration-300
                          group hover:bg-card-hover hover:scale-105 hover:translate-x-1
                          ${isActive(item.href) ? 'bg-gradient-primary text-primary-foreground shadow-glow' : 'text-muted-foreground hover:text-foreground'}
                        `}>
                        <Icon className={`
                          h-5 w-5 mr-3 transition-all duration-300 group-hover:scale-110
                          ${isActive(item.href) ? 'text-primary-foreground' : 'group-hover:text-primary'}
                        `} />
                        <span className="font-medium">{item.name}</span>
                      </NavLink>
                    )}
                  </li>;
            })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-border/40">
            <div className="flex items-center justify-center space-x-2 text-xs text-muted-foreground group cursor-default">
              <Terminal className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
              <span className="font-mono group-hover:text-foreground transition-colors duration-300">z3ncrypt3dBu9</span>
            </div>
            <div className="text-center mt-2 text-[10px] text-muted-foreground/60 font-mono">
              v2.0.1
            </div>
          </div>
        </div>
      </aside>
    </>;
}
