import { useState, useEffect } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Shield, Star, Code } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [typedText, setTypedText] = useState('');
  const [currentRole, setCurrentRole] = useState(0);

  const roles = ['Cybersecurity Specialist', 'Penetration Tester', 'Security Analyst', 'Ethical Hacker'];
  
  const skills = [
    'Penetration Testing',
    'Vulnerability Assessment', 
    'Network Security',
    'Incident Response',
    'Security Auditing'
  ];

  // Typing animation for roles
  useEffect(() => {
    let timeout: NodeJS.Timeout;
    let currentIndex = 0;
    
    const type = () => {
      const currentText = roles[currentRole];
      if (currentIndex <= currentText.length) {
        setTypedText(currentText.slice(0, currentIndex));
        currentIndex++;
        timeout = setTimeout(type, 80);
      } else {
        timeout = setTimeout(() => {
          setCurrentRole((prev) => (prev + 1) % roles.length);
          currentIndex = 0;
        }, 2000);
      }
    };

    type();
    return () => clearTimeout(timeout);
  }, [currentRole, roles]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-background to-muted/20 font-inter">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="relative container mx-auto px-6 py-20 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-16 items-center min-h-[80vh]">
          
          {/* Content - 7 columns */}
          <div className="lg:col-span-7 space-y-12">
            
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-emerald-600 text-sm font-medium">Available for New Opportunities</span>
            </div>

            {/* Main Content */}
            <div className="space-y-8">
              
              {/* Name & Title */}
              <div className="space-y-4">
                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight">
                  <span className="text-foreground">Raj</span>{' '}
                  <span className="bg-gradient-to-r from-primary via-purple-500 to-secondary bg-clip-text text-transparent">
                    Kumar
                  </span>
                </h1>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-2xl lg:text-3xl">
                    <span className="text-muted-foreground">I'm a</span>
                    <span className="text-primary font-semibold font-mono min-w-[280px]">
                      {typedText}
                      <span className="animate-ping text-secondary">|</span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Passionate cybersecurity professional specializing in ethical hacking, 
                penetration testing, and digital forensics. Dedicated to protecting 
                organizations from evolving cyber threats.
              </p>

              {/* Skills Grid */}
              <div className="space-y-4">
                <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-widest">Core Expertise</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {skills.map((skill, index) => (
                    <div 
                      key={skill}
                      className="group relative p-4 bg-card/50 border border-border/40 rounded-xl hover:border-primary/30 hover:bg-card/80 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-125 transition-transform" />
                        <span className="text-sm font-medium text-foreground/90">{skill}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="group bg-primary hover:bg-primary/90 text-primary-foreground font-semibold">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                
                <Button variant="outline" size="lg" className="border-border hover:border-primary/50 hover:bg-primary/5">
                  <Mail className="mr-2 h-4 w-4" />
                  Get In Touch
                </Button>
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-4 pt-4">
                <span className="text-sm text-muted-foreground">Connect with me</span>
                <div className="h-px bg-border flex-1" />
                <div className="flex gap-3">
                  {[
                    { href: "mailto:z3ncrypt3dbu9@gmail.com", icon: Mail, label: "Email" },
                    { href: "https://github.com/n220556", icon: Github, label: "GitHub" },
                    { href: "https://www.linkedin.com/in/raj-kumar-pentester/", icon: Linkedin, label: "LinkedIn" }
                  ].map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      className="p-2 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors group"
                      aria-label={label}
                    >
                      <Icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Profile & Stats - 5 columns */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative">
              
              {/* Main Image */}
              <div className="relative w-80 h-80 lg:w-[400px] lg:h-[400px]">
                {/* Gradient Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary via-purple-500 to-secondary rounded-3xl p-1">
                  <div className="w-full h-full bg-background rounded-3xl p-2">
                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-muted/50 to-card">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D4E03AQFsqWWVEU-HVg/profile-displayphoto-scale_200_200/B4EZjz9z8FGcAY-/0/1756439726873?e=1759363200&v=beta&t=WFuVVLXkjdhrpcnPzFc4XLM7WbDkX956F81kqU5irqY"
                        alt="Raj Kumar - Cybersecurity Professional"
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                      />
                    </div>
                  </div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -top-4 -right-4 bg-card border border-border rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Shield className="h-5 w-5 text-primary" />
                    <div>
                      <div className="text-lg font-bold text-foreground">CTF</div>
                      <div className="text-xs text-muted-foreground">Player</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-2xl p-4 shadow-lg backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-secondary" />
                    <div>
                      <div className="text-lg font-bold text-foreground">SEC+</div>
                      <div className="text-xs text-muted-foreground">Certified</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -left-8 -translate-y-1/2 bg-card border border-border rounded-xl p-3 shadow-lg backdrop-blur-sm">
                  <Code className="h-6 w-6 text-accent" />
                </div>
              </div>
              
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl -z-10 scale-110" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
