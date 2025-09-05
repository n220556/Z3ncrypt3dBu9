import { ChevronDown, Github, Linkedin, Mail, Shield, Terminal, Code, Zap, Download, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function Hero() {
  return <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 bg-modern-mesh opacity-40" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => <div key={i} className={`absolute w-1 h-1 bg-primary/30 rounded-full animate-float-particles opacity-${Math.random() > 0.5 ? '20' : '30'}`} style={{
        left: `${Math.random() * 100}%`,
        animationDelay: `${Math.random() * 10}s`,
        animationDuration: `${8 + Math.random() * 4}s`
      }} />)}
      </div>

      {/* Status Badge */}
      <div className="absolute top-6 left-6 flex items-center gap-3 rounded-full glass-card border border-primary/20 group hover:border-primary/40 transition-all duration-500 z-20 px-4 py-2">
        <div className="w-2 h-2 bg-secondary rounded-full animate-pulse" />
        <span className="text-sm font-mono text-muted-foreground group-hover:text-foreground transition-colors">
          Available for Cybersecurity Opportunities
        </span>
      </div>

      {/* Main Content */}
      <div className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          
          {/* Hero Headlines */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight">
                <span className="block text-foreground leading-none mx-[3px] my-px">
                  Raj Kumar
                </span>
                <span className="block gradient-text-animated text-4xl md:text-6xl lg:text-7xl font-semibold mt-2">
                  Cybersecurity Professional
                </span>
              </h1>
              
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                {['Penetration Tester', 'CTF Player', 'Security Researcher'].map((tag, index) => <span key={tag} className="px-4 py-2 text-sm font-mono bg-card/40 border border-border/40 rounded-full text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300 cursor-default" style={{
                animationDelay: `${index * 0.2}s`
              }}>
                    {tag}
                  </span>)}
              </div>
            </div>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-light">
              Specialized in <span className="text-primary font-medium">ethical hacking</span>, 
              <span className="text-secondary font-medium"> vulnerability assessment</span>, and 
              <span className="text-accent font-medium"> network security</span>. 
              Passionate about securing digital infrastructure and finding creative solutions to complex security challenges.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
            <Button size="lg" className="group px-8 py-4 text-lg font-semibold bg-gradient-primary hover:shadow-glow hover:scale-105 transition-all duration-300 border-0">
              <Shield className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
              Explore My Work
              <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button variant="outline" size="lg" className="group px-8 py-4 text-lg font-semibold border-primary/30 hover:border-primary/60 hover:bg-primary/10 hover:scale-105 transition-all duration-300 glass-card">
              <Download className="mr-3 h-5 w-5 group-hover:translate-y-1 transition-transform duration-300" />
              Download CV
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            {[{
            icon: Github,
            href: 'https://github.com',
            label: 'GitHub',
            color: 'hover:text-foreground'
          }, {
            icon: Linkedin,
            href: 'https://linkedin.com',
            label: 'LinkedIn',
            color: 'hover:text-blue-400'
          }, {
            icon: Mail,
            href: 'mailto:',
            label: 'Email',
            color: 'hover:text-accent'
          }].map(({
            icon: Icon,
            href,
            label,
            color
          }) => <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={`group p-4 rounded-full glass-card border border-border/30 hover:border-primary/50 transition-all duration-300 hover:scale-110 backdrop-blur-sm ${color}`} aria-label={label}>
                <Icon className="h-6 w-6 text-muted-foreground group-hover:scale-110 transition-all duration-300" />
              </a>)}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto pt-12">
            {[{
            number: '50+',
            label: 'CTF Challenges'
          }, {
            number: '3+',
            label: 'Years Experience'
          }, {
            number: '20+',
            label: 'Vulnerabilities Found'
          }].map(({
            number,
            label
          }, index) => <div key={label} className="text-center group cursor-default" style={{
            animationDelay: `${index * 0.2}s`
          }}>
                <div className="text-2xl md:text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {number}
                </div>
                <div className="text-sm text-muted-foreground font-mono mt-1">
                  {label}
                </div>
              </div>)}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-8 w-20 h-20 border border-primary/10 rounded-2xl rotate-45 animate-spin-slow" />
      <div className="absolute bottom-1/3 right-12 w-16 h-16 bg-gradient-secondary opacity-10 rounded-full animate-float-2" />
      <div className="absolute top-1/2 right-8 w-12 h-12 border-2 border-accent/20 rounded-full animate-float-3" />
      <div className="absolute top-3/4 left-1/4 w-8 h-8 bg-primary/20 rounded-lg animate-float-1" />
    </div>;
}