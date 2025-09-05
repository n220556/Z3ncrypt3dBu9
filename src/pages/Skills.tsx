import { Code, Shield, Server, GitBranch } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const skillCategories = [
  {
    title: 'Programming & Development',
    icon: Code,
    color: 'primary',
    skills: [
      { name: 'Java', level: 85 },
      { name: 'Python', level: 90 },
      { name: 'C', level: 75 },
      { name: 'JavaScript', level: 80 },
      { name: 'SQL', level: 85 },
      { name: 'DSA', level: 80 }
    ]
  },
  {
    title: 'Cybersecurity & Networking',
    icon: Shield,
    color: 'secondary',
    skills: [
      { name: 'Penetration Testing', level: 85 },
      { name: 'Web Security', level: 80 },
      { name: 'Network Security', level: 85 },
      { name: 'Linux', level: 90 },
      { name: 'Nmap', level: 85 },
      { name: 'Burp Suite', level: 80 },
      { name: 'Log Inspection', level: 75 }
    ]
  },
  {
    title: 'Tools & Technologies',
    icon: Server,
    color: 'accent',
    skills: [
      { name: 'Kali Linux', level: 90 },
      { name: 'Wireshark', level: 80 },
      { name: 'Metasploit', level: 75 },
      { name: 'OWASP ZAP', level: 70 },
      { name: 'Nikto', level: 75 }
    ]
  },
  {
    title: 'Version Control',
    icon: GitBranch,
    color: 'primary',
    skills: [
      { name: 'Git', level: 85 },
      { name: 'GitHub', level: 90 }
    ]
  }
];

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
    <div className="space-y-12">
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
          
          return (
            <Card key={index} className={`p-6 ${colors.bg} border-border/50 hover:bg-card-hover transition-colors`}>
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg bg-card border ${colors.border}`}>
                    <Icon className={`h-6 w-6 ${colors.icon}`} />
                  </div>
                  <h2 className="text-xl font-semibold">{category.title}</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      
                      <div className="relative">
                        <div className="w-full bg-muted rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full transition-all duration-1000 ease-out ${colors.progress}`}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* CTF Achievements */}
      <Card className="p-8 bg-gradient-subtle border-border/50">
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
              <p className="text-muted-foreground text-sm">Active since June 2024</p>
              <p className="text-sm">Hands-on cybersecurity training and practical penetration testing</p>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}