import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Enhanced Dynamic Background */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 bg-grid-pattern opacity-20 animate-pulse" />
        
        {/* Multiple Floating Orbs */}
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-l from-secondary/15 to-primary/15 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }} />
        
        {/* Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-transparent to-background/60" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Content Section */}
          <div className="space-y-10 animate-fade-in">
            {/* Status Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full glass-card bg-primary/10 border border-primary/30 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 group">
              <div className="relative">
                <span className="w-3 h-3 bg-secondary rounded-full mr-3 animate-pulse" />
                <span className="absolute top-0 left-0 w-3 h-3 bg-secondary rounded-full animate-ping opacity-75" />
              </div>
              <span className="text-primary font-medium text-sm tracking-wide">Available for Cybersecurity Roles</span>
            </div>
            
            {/* Main Heading with Enhanced Typography */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl xl:text-8xl font-bold leading-none tracking-tight">
                <span className="block gradient-text-animated animate-glow bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent bg-300% animate-gradient-shift">
                  Raj Kumar
                </span>
              </h1>
              
              <div className="space-y-4">
                <h2 className="text-2xl lg:text-3xl font-semibold text-foreground/90 leading-tight">
                  Aspiring Cybersecurity Professional
                </h2>
                <div className="flex flex-wrap gap-2 text-lg font-medium">
                  <span className="px-3 py-1 rounded-lg bg-primary/20 text-primary border border-primary/30">
                    Penetration Tester
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-secondary/20 text-secondary border border-secondary/30">
                    CTF Player
                  </span>
                  <span className="px-3 py-1 rounded-lg bg-accent/20 text-accent border border-accent/30">
                    Ethical Hacker
                  </span>
                </div>
              </div>
              
              <p className="text-xl text-muted-foreground max-w-xl leading-relaxed font-light">
                Dedicated to identifying vulnerabilities and strengthening digital defenses through 
                ethical hacking, penetration testing, and continuous learning in cybersecurity.
              </p>
            </div>

            {/* Enhanced CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Button 
                className="relative px-8 py-4 text-lg font-semibold bg-gradient-to-r from-primary to-secondary hover:from-secondary hover:to-primary transition-all duration-500 shadow-2xl hover:shadow-primary/25 transform hover:-translate-y-1 group overflow-hidden"
                size="lg"
              >
                <span className="relative z-10 flex items-center">
                  View Portfolio
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-primary/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="relative px-8 py-4 text-lg font-semibold glass-card bg-background/20 border-2 border-primary/30 hover:border-primary/60 hover:bg-primary/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 group overflow-hidden"
              >
                <span className="relative z-10 flex items-center">
                  <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Contact Me
                </span>
              </Button>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex items-center gap-8 pt-6">
              {[
                { href: "mailto:z3ncrypt3dbu9@gmail.com", icon: Mail, label: "Email", color: "text-blue-400" },
                { href: "https://github.com/n220556", icon: Github, label: "GitHub", color: "text-purple-400" },
                { href: "https://www.linkedin.com/in/raj-kumar-pentester/", icon: Linkedin, label: "LinkedIn", color: "text-cyan-400" }
              ].map(({ href, icon: Icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  className={`group relative p-3 rounded-xl glass-card bg-card/30 border border-border/40 hover:border-primary/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${color} hover:shadow-lg`}
                  aria-label={label}
                >
                  <Icon className="h-6 w-6 transition-transform group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Enhanced Profile Image Section */}
          <div className="flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <div className="relative group">
              {/* Multi-layered Glow Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 animate-pulse" />
              <div className="absolute -inset-8 bg-gradient-to-l from-secondary via-primary to-accent rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '1s' }} />
              <div className="absolute -inset-12 bg-gradient-to-br from-accent via-primary to-secondary rounded-full blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700 animate-pulse" style={{ animationDelay: '2s' }} />
              
              {/* Enhanced Image Container */}
              <div className="relative w-96 h-96 lg:w-[420px] lg:h-[420px]">
                {/* Outer Ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary via-secondary to-accent p-1 animate-gradient-shift shadow-2xl">
                  {/* Middle Ring */}
                  <div className="w-full h-full rounded-full bg-gradient-to-tl from-background/95 to-background/90 p-2 backdrop-blur-sm">
                    {/* Inner Container */}
                    <div className="w-full h-full rounded-full overflow-hidden bg-card/95 backdrop-blur-md shadow-inner group-hover:shadow-2xl transition-shadow duration-500">
                      <img 
                        src="https://media.licdn.com/dms/image/v2/D4E03AQGuvW8OzVHnWQ/profile-displayphoto-shrink_800_800/B4EZVCz.mgHcAk-/0/1740582678359?e=1759363200&v=beta&t=5o1LPg-gPLdS1Jbpgfcg_WIBgic4rsc4ISWXCL6ksPs"
                        alt="Raj Kumar - Cybersecurity Professional"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Enhanced Floating Tech Badges */}
              <div className="absolute -top-6 -right-6 w-24 h-24 glass-card bg-secondary/20 rounded-2xl backdrop-blur-md border border-secondary/40 flex items-center justify-center hover-lift pulse-glow shadow-lg group-hover:shadow-secondary/25 transition-all duration-500">
                <span className="text-secondary font-mono font-bold text-lg">CTF</span>
              </div>
              
              <div className="absolute -bottom-6 -left-6 w-20 h-20 glass-card bg-primary/20 rounded-2xl backdrop-blur-md border border-primary/40 flex items-center justify-center hover-lift pulse-glow shadow-lg group-hover:shadow-primary/25 transition-all duration-500" style={{ animationDelay: '1s' }}>
                <span className="text-primary font-mono font-semibold text-sm">SEC+</span>
              </div>

              <div className="absolute top-1/4 -left-12 w-16 h-16 glass-card bg-accent/20 rounded-xl backdrop-blur-md border border-accent/40 flex items-center justify-center hover-lift pulse-glow shadow-lg group-hover:shadow-accent/25 transition-all duration-500" style={{ animationDelay: '2s' }}>
                <span className="text-accent font-mono text-xl">⚡</span>
              </div>

              <div className="absolute top-8 right-8 w-14 h-14 glass-card bg-orange-400/20 rounded-lg backdrop-blur-md border border-orange-400/40 flex items-center justify-center hover-lift pulse-glow shadow-lg group-hover:shadow-orange-400/25 transition-all duration-500" style={{ animationDelay: '3s' }}>
                <span className="text-orange-400 font-mono text-lg">🛡️</span>
              </div>

              <div className="absolute bottom-16 right-12 w-12 h-12 glass-card bg-cyan-400/20 rounded-full backdrop-blur-md border border-cyan-400/40 flex items-center justify-center hover-lift pulse-glow shadow-lg group-hover:shadow-cyan-400/25 transition-all duration-500" style={{ animationDelay: '4s' }}>
                <span className="text-cyan-400 font-mono text-sm">🔒</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
