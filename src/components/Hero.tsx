import { ArrowRight, Mail, Github, Linkedin, Shield, Terminal, Code, Zap, Lock, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import profileImage from '@/assets/profile-image.jpg';

const FloatingIcon = ({ icon: Icon, delay = 0, duration = 3, className = "" }) => (
  <div 
    className={`absolute animate-bounce opacity-60 ${className}`}
    style={{
      animationDelay: `${delay}s`,
      animationDuration: `${duration}s`
    }}
  >
    <div className="p-2 bg-card/30 backdrop-blur-sm rounded-lg border border-border/30">
      <Icon className="h-4 w-4 text-primary" />
    </div>
  </div>
);

const TypewriterText = ({ texts, speed = 100 }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentText.length) {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentIndex, texts, speed]);

  return <span className="text-secondary">{displayText}<span className="animate-pulse">|</span></span>;
};

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-30 transition-transform duration-1000 ease-out"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-hero opacity-80" />
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, hsl(var(--primary) / 0.3) 0%, transparent 50%)`
          }}
        />
        
        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary rounded-full opacity-60 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>
      </div>
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-10 animate-fade-in">
            {/* Status Badge */}
            <div className="flex items-center space-x-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-card/60 backdrop-blur-sm border border-primary/30 text-primary text-sm font-medium shadow-glow">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse" />
                Available for Cybersecurity Roles
              </div>
              <div className="hidden sm:flex items-center space-x-2 text-xs text-muted-foreground">
                <Eye className="h-3 w-3" />
                <span>Remote • Full-time</span>
              </div>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-primary bg-clip-text text-transparent animate-glow">
                    Raj Kumar
                  </span>
                </h1>
                
                <div className="text-2xl lg:text-3xl font-medium text-muted-foreground">
                  <TypewriterText 
                    texts={[
                      'Cybersecurity Professional',
                      'Penetration Tester', 
                      'CTF Champion',
                      'Ethical Hacker'
                    ]} 
                  />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Securing digital infrastructures through advanced penetration testing, 
                vulnerability assessment, and ethical hacking methodologies.
              </p>
            </div>

            {/* Skills Tags */}
            <div className="flex flex-wrap gap-3">
              {['Python', 'Burp Suite', 'Nmap', 'Linux', 'OWASP'].map((skill, index) => (
                <span 
                  key={skill}
                  className="px-3 py-1 text-xs font-mono bg-card/40 backdrop-blur-sm rounded-full border border-border/50 text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-500 group relative overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  Explore Portfolio
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/30 bg-card/20 backdrop-blur-sm hover:bg-primary/10 hover:border-primary/60 hover:shadow-glow-secondary transition-all duration-300 group"
              >
                <Mail className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform duration-300" />
                Let's Connect
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center space-x-6 pt-4">
              <div className="text-sm text-muted-foreground">Find me on:</div>
              <div className="flex space-x-4">
                {[
                  { icon: Mail, href: 'mailto:z3ncrypt3dbu9@gmail.com', label: 'Email' },
                  { icon: Github, href: '#', label: 'GitHub' },
                  { icon: Linkedin, href: '#', label: 'LinkedIn' }
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    className="p-2 bg-card/40 backdrop-blur-sm rounded-lg border border-border/30 text-muted-foreground hover:text-primary hover:border-primary/50 hover:shadow-glow transition-all duration-300 hover:scale-110"
                    aria-label={label}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Profile Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in">
            <div className="relative">
              {/* Dynamic Glow Effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-20 scale-125 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-10 scale-110" />
              
              {/* Orbiting Ring */}
              <div className="absolute inset-0 w-96 h-96 -translate-x-8 -translate-y-8">
                <div className="w-full h-full rounded-full border border-primary/20 animate-spin" style={{ animationDuration: '20s' }}>
                  <div className="absolute top-0 left-1/2 w-2 h-2 bg-primary rounded-full -translate-x-1 -translate-y-1" />
                </div>
              </div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-primary p-1 hover:scale-105 transition-all duration-500 group">
                <div className="w-full h-full rounded-full overflow-hidden bg-card relative">
                  <img 
                    src={profileImage}
                    alt="Raj Kumar - Cybersecurity Professional"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Status Indicator */}
                  <div className="absolute top-4 right-4 w-4 h-4 bg-secondary rounded-full border-2 border-card animate-pulse" />
                </div>
              </div>

              {/* Floating Tech Icons */}
              <FloatingIcon 
                icon={Shield} 
                delay={0}
                className="top-[-20px] right-[20px]"
              />
              <FloatingIcon 
                icon={Terminal} 
                delay={1}
                className="top-[40px] left-[-30px]"
              />
              <FloatingIcon 
                icon={Code} 
                delay={2}
                className="bottom-[20px] right-[-20px]"
              />
              <FloatingIcon 
                icon={Lock} 
                delay={1.5}
                className="bottom-[60px] left-[10px]"
              />
              <FloatingIcon 
                icon={Zap} 
                delay={0.5}
                className="top-[100px] right-[-40px]"
              />

              {/* Enhanced Achievement Badges */}
              <div className="absolute -top-6 -right-6 group">
                <div className="w-24 h-24 bg-card/80 backdrop-blur-sm rounded-2xl border border-secondary/30 flex flex-col items-center justify-center hover:shadow-glow-secondary transition-all duration-300 cursor-pointer">
                  <span className="text-secondary font-mono font-bold text-lg">CTF</span>
                  <span className="text-xs text-muted-foreground">Player</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 group">
                <div className="w-20 h-20 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/30 flex flex-col items-center justify-center hover:shadow-glow transition-all duration-300 cursor-pointer">
                  <span className="text-primary text-sm font-mono font-bold">PEN</span>
                  <span className="text-xs text-muted-foreground">TEST</span>
                </div>
              </div>

              {/* Experience Stats */}
              <div className="absolute top-1/2 -left-20 transform -translate-y-1/2 hidden xl:block">
                <div className="bg-card/60 backdrop-blur-sm rounded-lg border border-border/30 p-3 text-center">
                  <div className="text-primary font-bold text-lg">2+</div>
                  <div className="text-xs text-muted-foreground">Years</div>
                  <div className="text-xs text-muted-foreground">Learning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}