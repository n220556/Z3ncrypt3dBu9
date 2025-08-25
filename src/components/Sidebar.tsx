import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Home, User, Code, Briefcase, FileText, BookOpen, Tag, Mail, Menu, X, Terminal } from 'lucide-react';
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
  name: 'Services',
  href: '/services',
  icon: Briefcase
}, {
  name: 'Write-ups',
  href: '/writeups',
  icon: FileText
}, {
  name: 'Blogs',
  href: '/blogs',
  icon: BookOpen
}, {
  name: 'Tags',
  href: '/tags',
  icon: Tag
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
        fixed top-0 left-0 z-40 h-full w-64 bg-gradient-subtle border-r border-border
        transform transition-transform duration-300 ease-smooth
        md:translate-x-0 md:relative md:z-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
      `}>
        <div className="flex flex-col h-full p-6">
          {/* Profile Section */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 rounded-full bg-gradient-primary p-0.5 mb-4">
              <img src={profileImage} alt="Raj Kumar Profile" className="w-full h-full rounded-full object-cover bg-card" />
            </div>
            <h1 className="font-display font-bold text-xl mb-1">Raj Kumar</h1>
            <p className="text-sm text-muted-foreground text-center">
              Cybersecurity Professional
            </p>
            <p className="text-xs text-muted-foreground text-center mt-1">
              Penetration Tester | CTF Player
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-2">
              {navigation.map(item => {
              const Icon = item.icon;
              return <li key={item.name}>
                    <NavLink to={item.href} onClick={() => setIsOpen(false)} className={`
                        flex items-center px-3 py-2.5 rounded-lg transition-all duration-200
                        group hover:bg-card-hover
                        ${isActive(item.href) ? 'bg-primary/10 text-primary border border-primary/20 shadow-glow' : 'text-muted-foreground hover:text-foreground'}
                      `}>
                      <Icon className={`
                        h-5 w-5 mr-3 transition-colors
                        ${isActive(item.href) ? 'text-primary' : ''}
                      `} />
                      <span className="font-medium">{item.name}</span>
                    </NavLink>
                  </li>;
            })}
            </ul>
          </nav>

          {/* Footer */}
          <div className="pt-6 border-t border-border">
            <div className="flex items-center justify-center space-x-1 text-xs text-muted-foreground">
              <Terminal className="h-3 w-3" />
              <span>z3ncrypt3dBu9
            </span>
            </div>
          </div>
        </div>
      </aside>
    </>;
}