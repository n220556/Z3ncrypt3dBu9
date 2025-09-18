import { Code, Shield, Server, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
const skillCategories = [{
  title: 'Programming & Development',
  icon: Code,
  color: 'primary',
  skills: [{
    name: 'Java',
    level: 85
  }, {
    name: 'Python',
    level: 90
  }, {
    name: 'C',
    level: 75
  }, {
    name: 'JavaScript',
    level: 80
  }, {
    name: 'SQL',
    level: 85
  }, {
    name: 'DSA',
    level: 80
  }]
}, {
  title: 'Cybersecurity & Networking',
  icon: Shield,
  color: 'secondary',
  skills: [{
    name: 'Penetration Testing',
    level: 85
  }, {
    name: 'Web Security',
    level: 80
  }, {
    name: 'Network Security',
    level: 85
  }, {
    name: 'Linux',
    level: 90
  }, {
    name: 'Nmap',
    level: 85
  }, {
    name: 'Burp Suite',
    level: 80
  }, {
    name: 'Log Inspection',
    level: 75
  }]
}, {
  title: 'Tools & Technologies',
  icon: Server,
  color: 'accent',
  skills: [{
    name: 'Kali Linux',
    level: 90
  }, {
    name: 'Wireshark',
    level: 80
  }, {
    name: 'Metasploit',
    level: 75
  }, {
    name: 'OWASP ZAP',
    level: 70
  }, {
    name: 'Nikto',
    level: 75
  }]
}, {
  title: 'Version Control',
  icon: GitBranch,
  color: 'primary',
  skills: [{
    name: 'Git',
    level: 85
  }, {
    name: 'GitHub',
    level: 90
  }]
}];
const getColorClasses = (color: string) => {
  switch (color) {
    case 'secondary':
      return {
        icon: 'text-secondary',
        border: 'border-secondary/20',
        bg: 'bg-secondary/5',
        progress: 'bg-secondary'
      };
    case 'accent':
      return {
        icon: 'text-accent-foreground',
        border: 'border-accent/20',
        bg: 'bg-accent/5',
        progress: 'bg-accent-foreground'
      };
    default:
      return {
        icon: 'text-primary',
        border: 'border-primary/20',
        bg: 'bg-primary/5',
        progress: 'bg-primary'
      };
  }
};
export default function Skills() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80" />
      <div className="absolute inset-0 bg-modern-mesh opacity-20" />
      <div className="absolute inset-0 bg-gradient-subtle" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className={`absolute w-1 h-1 bg-primary/20 rounded-full animate-float-particles opacity-${Math.random() > 0.5 ? '10' : '20'}`} 
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }} 
          />
        ))}
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-1/4 left-8 w-16 h-16 border border-primary/10 rounded-2xl rotate-45 animate-spin-slow opacity-30" />
      <div className="absolute bottom-1/3 right-12 w-12 h-12 bg-gradient-secondary opacity-5 rounded-full animate-float-2" />
      <div className="absolute top-1/2 right-8 w-10 h-10 border-2 border-accent/15 rounded-full animate-float-3" />
      <div className="absolute top-3/4 left-1/4 w-6 h-6 bg-primary/10 rounded-lg animate-float-1" />

      <div className="relative z-10 space-y-12 px-6 py-12">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent">
          Skills & Expertise
        </h1>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Technical proficiencies across cybersecurity, programming, and security tools
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid gap-8">
        {skillCategories.map((category, index) => {
        const Icon = category.icon;
        const colors = getColorClasses(category.color);
        return <Card key={index} className={`p-6 glass-card border-primary/20 backdrop-blur-sm hover:border-primary/40 hover:shadow-glow transition-all duration-300 ${colors.bg}`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-card border ${colors.border}`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div className={`h-2 rounded-full transition-all duration-1000 ease-out ${colors.progress}`} style={{
                      width: `${skill.level}%`
                    }} />
                        </div>
                      </div>
                    </div>)}
                </div>
              </div>
            </Card>;
      })}
      </div>

      {/* CTF Achievements */}
      <Card className="p-8 glass-card border-primary/20 backdrop-blur-sm bg-gradient-subtle">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-semibold">CTF & Competitions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">PicoCTF</h3>
              <p className="text-muted-foreground text-sm">Active participant since December 2024</p>
              <p className="text-sm">Competing in cryptography, web exploitation, and reverse engineering challenges</p>
            </div>
            
            <div className="space-y-2">
              <h3 className="font-semibold text-secondary">TryHackMe</h3>
              <p className="text-muted-foreground text-sm">Active since June 2025</p>
              <p className="text-sm">Hands-on cybersecurity training and practical penetration testing</p>
            </div>
          </div>
        </div>
      </Card>
      </div>
    </div>
  );
}