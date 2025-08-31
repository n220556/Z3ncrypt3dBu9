import { useState, useEffect, useRef } from 'react';
import { ArrowRight, Mail, Github, Linkedin, Shield, Target, Bug } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const [activeSkill, setActiveSkill] = useState(0);
  const [typedText, setTypedText] = useState('');

  const skills = ['Penetration Testing', 'Vulnerability Assessment', 'Network Security', 'Digital Forensics', 'Incident Response'];
  const typingTexts = ['Securing Digital Assets', 'Hunting Cyber Threats', 'Protecting Networks', 'Ethical Hacking'];

  // Auto-cycling skills
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSkill((prev) => (prev + 1) % skills.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [skills.length]);

  // Typing animation
  useEffect(() => {
    let currentIndex = 0;
    let textIndex = 0;
    let isDeleting = false;
    
    const typeEffect = () => {
      const currentText = typingTexts[textIndex];
      
      if (!isDeleting) {
        setTypedText(currentText.substring(0, currentIndex + 1));
        currentIndex++;
        
        if (currentIndex === currentText.length) {
          setTimeout(() => {
            isDeleting = true;
          }, 2000);
        }
      } else {
        setTypedText(currentText.substring(0, currentIndex - 1));
        currentIndex--;
        
        if (currentIndex === 0) {
          isDeleting = false;
          textIndex = (textIndex + 1) % typingTexts.length;
        }
      }
    };

    const timer = setInterval(typeEffect, isDeleting ? 50 : 100);
    return () => clearInterval(timer);
  }, [typingTexts]);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-background via-background/95 to-background">
      {/* Clean Modern Background */}
      <div className="absolute inset-0">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card/30 to-background" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        
        {/* Soft glow effects */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float-slow" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center min-h-screen">
          {/* Content Section */}
          <div className="space-y-8 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 shadow-sm">
              <div className="w-2 h-2 bg-secondary rounded-full mr-3 animate-pulse" />
              <span className="text-primary font-medium text-sm">Available for Cybersecurity Roles</span>
            </div>
            
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  Raj Kumar
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">
                  Cybersecurity Professional
                </h2>
                
                {/* Typing Animation */}
                <div className="flex items-center text-lg">
                  <span className="text-primary mr-2 font-mono">$</span>
                  <span className="text-secondary font-mono">
                    {typedText}
                    <span className="animate-pulse text-primary">|</span>
                  </span>
                </div>
              </div>

              {/* Skills */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">Specializations</p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, index) => (
                    <span
                      key={skill}
                      className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${
                        index === activeSkill
                          ? 'bg-primary text-primary-foreground shadow-md'
                          : 'bg-muted text-muted-foreground hover:bg-primary/20 hover:text-primary'
                      }`}
                      onClick={() => setActiveSkill(index)}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Role Tags */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: 'Penetration Tester', icon: Target },
                  { label: 'CTF Player', icon: Shield },
                  { label: 'Ethical Hacker', icon: Bug },
                ].map(({ label, icon: Icon }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card border border-border hover:border-primary/50 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-primary" />
                    <span className="text-sm font-medium">{label}</span>
                  </div>
                ))}
              </div>
              
              <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
                Passionate about securing digital infrastructure through ethical hacking, 
                vulnerability assessment, and continuous learning in cybersecurity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg"
                className="bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-300 group"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:border-primary/50 hover:bg-primary/5"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {[
                { href: "mailto:z3ncrypt3dbu9@gmail.com", icon: Mail, label: "Email" },
                { href: "https://github.com/n220556", icon: Github, label: "GitHub" },
                { href: "https://www.linkedin.com/in/raj-kumar-pentester/", icon: Linkedin, label: "LinkedIn" }
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  className="p-3 rounded-lg bg-card border border-border hover:border-primary/50 hover:bg-primary/5 transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative">
              {/* Subtle glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-2xl opacity-60" />
              
              {/* Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 p-1">
                  <div className="w-full h-full rounded-full bg-background p-2">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D4E03AQFsqWWVEU-HVg/profile-displayphoto-scale_200_200/B4EZjz9z8FGcAY-/0/1756439726873?e=1759363200&v=beta&t=WFuVVLXkjdhrpcnPzFc4XLM7WbDkX956F81kqU5irqY"
                        alt="Raj Kumar - Cybersecurity Professional"
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 px-3 py-1 bg-secondary/20 border border-secondary/30 rounded-lg backdrop-blur-sm">
                <span className="text-secondary font-mono text-sm font-bold">CTF</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 px-3 py-1 bg-primary/20 border border-primary/30 rounded-lg backdrop-blur-sm">
                <span className="text-primary font-mono text-sm font-semibold">CERT</span>
              </div>

              <div className="absolute top-1/4 -left-8 px-2 py-1 bg-accent/20 border border-accent/30 rounded backdrop-blur-sm">
                <span className="text-accent text-lg">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
