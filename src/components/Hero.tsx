import { ArrowRight, Download, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/profile-image.jpg';

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary)) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
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
                <span className="bg-gradient-primary bg-clip-text text-transparent">
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
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group"
                size="lg"
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-primary/20 hover:bg-primary/5 hover:border-primary/40"
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
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="#"
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
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110" />
              
              {/* Image Container */}
              <div className="relative w-80 h-80 rounded-full bg-gradient-primary p-1">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img 
                    src={"https://media.licdn.com/dms/image/v2/D4E03AQGuvW8OzVHnWQ/profile-displayphoto-shrink_800_800/B4EZVCz.mgHcAk-/0/1740582678359?e=1759363200&v=beta&t=5o1LPg-gPLdS1Jbpgfcg_WIBgic4rsc4ISWXCL6ksPs"}
                    alt="Raj Kumar - Cybersecurity Professional"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-secondary/20 rounded-lg backdrop-blur-sm border border-secondary/30 flex items-center justify-center">
                <span className="text-secondary font-mono font-bold">CTF</span>
              </div>
              
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-lg backdrop-blur-sm border border-primary/30 flex items-center justify-center">
                <span className="text-primary text-xs font-mono">SEC+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
