import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/10 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      <div className="relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
                <span className="w-2 h-2 bg-secondary rounded-full mr-2 animate-pulse" />
                Available for Cybersecurity Roles
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                <span className="gradient-text-animated animate-glow">
                  Raj Kumar
                </span>
              </h1>
              
              <div className="space-y-2">
                <h2 className="text-xl lg:text-2xl text-muted-foreground font-medium">
                  Aspiring Cybersecurity Professional
                </h2>
                <p className="text-lg text-primary">
                  Penetration Tester | CTF Player | Ethical Hacker
                </p>
              </div>
              
              <p className="text-muted-foreground max-w-md leading-relaxed">
                Dedicated to identifying vulnerabilities and strengthening digital defenses through 
                ethical hacking, penetration testing, and continuous learning in cybersecurity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group pulse-glow"
                size="lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="glass-card border-primary/20 hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-6">
              <a 
                href="mailto:z3ncrypt3dbu9@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a 
                href="https://github.com/n220556"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://www.linkedin.com/in/raj-kumar-pentester/"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Enhanced Glow Effects */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-3xl opacity-40 scale-110 animate-pulse" />
              <div className="absolute inset-0 bg-gradient-secondary rounded-full blur-2xl opacity-20 scale-125" style={{ animationDelay: '1s' }} />
              
              {/* Image Container with Glass Effect */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-primary p-1 glass-card">
                <div className="w-full h-full rounded-full overflow-hidden bg-card/90 backdrop-blur-sm">
                  <img 
                    src={"https://media.licdn.com/dms/image/v2/D4E03AQGuvW8OzVHnWQ/profile-displayphoto-shrink_800_800/B4EZVCz.mgHcAk-/0/1740582678359?e=1759363200&v=beta&t=5o1LPg-gPLdS1Jbpgfcg_WIBgic4rsc4ISWXCL6ksPs"}
                    alt="Raj Kumar - Cybersecurity Professional"
                    className="w-full h-full object-cover hover-lift"
                  />
                </div>
              </div>

              {/* Enhanced Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 glass-card bg-secondary/20 rounded-xl backdrop-blur-sm border border-secondary/30 flex items-center justify-center hover-lift pulse-glow">
                <span className="text-secondary font-mono font-bold">CTF</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 glass-card bg-primary/20 rounded-xl backdrop-blur-sm border border-primary/30 flex items-center justify-center hover-lift" style={{ animationDelay: '1s' }}>
                <span className="text-primary text-xs font-mono">SEC+</span>
              </div>

              {/* Additional floating tech badges */}
              <div className="absolute top-1/4 -left-8 w-12 h-12 glass-card bg-orange-500/20 rounded-lg backdrop-blur-sm border border-orange-500/30 flex items-center justify-center hover-lift" style={{ animationDelay: '2s' }}>
                <span className="text-orange-400 text-xs font-mono">⚡</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
